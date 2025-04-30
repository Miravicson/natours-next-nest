import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { JwtPayload } from 'jsonwebtoken';
import { Types } from 'mongoose';

import { User } from '@/common/db/mongoose-schemas/user/user.schema';
import { ObjectIdToString } from '@/common/decorators/object-id-to-string.decorator';

export class UserEntity implements User {
  name: string;
  username: string;
  email: string;
  photo: string;
  phone: string;
  role: string;

  @ApiHideProperty()
  @Exclude()
  password: string;

  @ApiHideProperty()
  @Exclude()
  passwordConfirm: string;

  @ApiHideProperty()
  @Exclude()
  passwordChangedAt?: Date | undefined;

  @ApiHideProperty()
  @Exclude()
  passwordResetToken?: string | undefined;

  @ApiHideProperty()
  @Exclude()
  passwordResetExpires?: Date | undefined;

  @ApiHideProperty()
  @Exclude()
  active: boolean;

  @ApiHideProperty()
  @Exclude()
  emailConfirmToken: string;

  @ApiHideProperty()
  @Exclude()
  emailConfirmedAt: Date;

  @ApiHideProperty()
  @Exclude()
  userConfirmed: boolean;

  @ApiHideProperty()
  @Exclude()
  createConfirmationToken(): string {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  confirmEmail(): void {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  forgotPassword(): string {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  resetPassword(password: string): void {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  hasConfirmedEmail(): boolean {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  wasPasswordChangedAfter(JWTTimestamp: number): boolean {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  comparePassword(password: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  @ApiHideProperty()
  @Exclude()
  createJwtPayload(): JwtPayload {
    throw new Error('Method not implemented.');
  }

  @ObjectIdToString()
  _id: Types.ObjectId;

  constructor(entity: Partial<UserEntity> | null) {
    if (entity != null) {
      Object.assign(this, entity);
    }
  }

  static one(entity: Partial<UserEntity> | null) {
    return new UserEntity(entity);
  }

  static many(entities: Partial<UserEntity>[]) {
    return entities.map((entity) => UserEntity.one(entity));
  }
}
