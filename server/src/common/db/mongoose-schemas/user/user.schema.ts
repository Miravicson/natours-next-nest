import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { verify } from 'argon2';
import { isEmail } from 'class-validator';
import { JwtPayload } from 'jsonwebtoken';
import * as _ from 'lodash';
import { HydratedDocument, Model, QueryWithHelpers, Types } from 'mongoose';

import { genTokenAndHash } from '@/common/lib/gen-token-and-hash';

import { AbstractDocument } from '../abstract.schema';
import { RoleEnum } from './constants';
import { UserSchemaHook } from './user.schema.hooks';

function transformUser(_doc: any, ret: { [x: string]: any }) {
  const propertiesToDelete = [
    '__v',
    '_id',
    'userConfirmed',
    'emailConfirmToken',
    // 'active',
    'emailConfirmedAt',
    // 'createdAt',
    'password',
    'passwordChangedAt',
    'passwordResetToken',
    'passwordResetExpires',
    // 'updatedAt',
  ];
  propertiesToDelete.forEach((property) => {
    delete ret[property];
  });

  return ret;
}

@Schema({
  timestamps: true,
  toJSON: { virtuals: true, transform: transformUser },
  toObject: { virtuals: true },
  versionKey: false,
  query: {
    byUserId(userId) {
      return this.where({ _id: userId });
    },
    isActive() {
      return this.where({ active: true });
    },
  },
})
export class User extends AbstractDocument {
  @Prop({
    type: String,
    trim: true,
    minLength: [2, 'The length of the first name must be a minimum of 2 characters'],
    maxLength: [25, 'The maximum length of the name must be 25 characters'],
    required: [true, 'Please tell us your name!'],
    set: _.capitalize,
  })
  name: string;

  @Prop({
    type: String,
    maxLength: [25, 'The maximum length of your username must be 25 characters'],
  })
  username: string;

  @Prop({
    type: String,
    maxLength: [100, 'The email address must be a maximum of 100 characters'],
    validate: [isEmail, 'Invalid email'],
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true,
  })
  email: string;

  @Prop({
    type: String,
    trim: true,
    default: 'default.jpg',
  })
  photo: string;

  @Prop({
    type: String,
    trim: true,
  })
  phone: string;

  @Prop({
    type: String,
    enum: {
      values: Object.values(RoleEnum),
      message: `The user role must be one of ${Object.values(RoleEnum)}`,
    },
    default: 'user',
  })
  role: string;

  @Prop({
    type: String,
    required: [true, 'Please provide a password'],
    minLength: [8, 'You password must not be less than 8 characters'],
    select: false, // don't return the password
  })
  password: string;

  @Prop({
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      message: 'Passwords must match',
      validator: function (this: any, value: any) {
        // This works only on save and create
        return this.password === value;
      },
    },
    select: false, // don't return the passwordConfirm
  })
  passwordConfirm: string;

  @Prop({
    type: Date,
  })
  passwordChangedAt?: Date;

  @Prop({ type: String })
  passwordResetToken?: string;

  @Prop({
    type: Date,
  })
  passwordResetExpires?: Date;

  @Prop({
    type: Boolean,
    default: true,
    select: false,
  })
  active: boolean;

  @Prop()
  emailConfirmToken: string;

  @Prop()
  emailConfirmedAt: Date;

  @Prop({
    type: Boolean,
    default: false,
  })
  userConfirmed: boolean;

  createConfirmationToken(): string {
    const { token, hashedToken } = genTokenAndHash();
    this.emailConfirmToken = hashedToken;
    return token;
  }

  confirmEmail() {
    this.userConfirmed = true;
    this.emailConfirmedAt = new Date(Date.now());
    this.emailConfirmToken = '';
  }

  forgotPassword(): string {
    const { token, hashedToken } = genTokenAndHash();
    this.passwordResetToken = hashedToken;
    this.passwordResetExpires = new Date(Date.now() + 10 * 60 * 1000);
    return token;
  }

  resetPassword(password: string) {
    this.password = password;
    this.passwordResetToken = '';
    this.passwordResetExpires = undefined;
  }

  hasConfirmedEmail() {
    return this.userConfirmed;
  }

  /**
   * Checks if the password has been changed after the jwt token has been issued.
   * @param JWTTimestamp number number in seconds obtained from jwt.iat
   * @returns boolean
   */
  wasPasswordChangedAfter(JWTTimestamp: number): boolean {
    if (this.passwordChangedAt) {
      const changedTimeStamp = (this.passwordChangedAt as Date).getTime() / 1000;
      return changedTimeStamp > JWTTimestamp;
    }
    return false;
  }

  async comparePassword(password: string) {
    const isValid = await verify(this.password, password);
    return isValid;
  }

  createJwtPayload(): JwtPayload {
    return {
      email: this.email,
      sub: this._id.toString(),
    };
  }

  static async isExisting(this: UserModel, userOrUserId: User | string | Types.ObjectId) {
    const documentOrNull = await this.exists({
      _id: userOrUserId instanceof Model ? (userOrUserId as UserDocument)._id : userOrUserId,
    });

    return Boolean(documentOrNull);
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.loadClass(User);
UserSchemaHook.registerWithHooks(UserSchema);

UserSchema.index({ email: 1 }, { unique: true });

export type UserDocument = HydratedDocument<User>;

export interface UserQueryHelpers {
  byUserId(): QueryWithHelpers<UserDocument[], UserDocument, UserQueryHelpers>;
}

/**
 * 1. Export UserModel = Model<UserDocument> if you are not using static methods
 * 2. Export interface UserModel extends Model<UserDocument> {
 *    ... define staticMethod()
 * } if you are using a static method
 * 3. Export  interface UserModel extends Model<UserDocument, UserQueryHelpers> {
 *
 * } if you are using static methods and query helpers
 */
export interface UserModel extends Model<UserDocument, UserQueryHelpers> {
  isExisting: (typeof User)['isExisting'];
}

