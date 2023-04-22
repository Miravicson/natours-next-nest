import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';
import { FilterQuery, Model } from 'mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { User, UserDocument } from 'src/common/db/mongoose-schemas/user/user.schema';
import { OperationalException } from 'src/common/exception-filters/OperationalException';

import { UpdateLoggedInUserDto } from './dto/update-loggedin-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

export type UserFilterQuery = FilterQuery<UserDocument>;

export type GetUserOptions = {
  withPassword?: boolean;
  disableMiddleware?: boolean;
  select?: string;
};

@Injectable()
export class UserService extends AbstractRepository<UserDocument> {
  logger = new Logger(this.constructor.name);
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
    super(userModel);
  }
  async getUser(userFilter: UserFilterQuery): Promise<UserDocument>;
  async getUser(userFilter: User | string): Promise<UserDocument>;
  async getUser(userOrUserId: User | string | UserFilterQuery, getUserOptions: GetUserOptions): Promise<UserDocument>;
  async getUser(
    userOrUserIdOrUserFilter: User | string | UserFilterQuery,
    getUserOptions: GetUserOptions = { withPassword: false, disableMiddleware: false },
  ): Promise<UserDocument> {
    if (userOrUserIdOrUserFilter instanceof Model) {
      this.logger.verbose(`Finding user with user Instance`);
      return userOrUserIdOrUserFilter as UserDocument;
    }

    let userQuery;

    if (typeof userOrUserIdOrUserFilter === 'string') {
      this.logger.verbose(`Finding user with userId`);
      userQuery = this.userModel.findById(userOrUserIdOrUserFilter);
    } else {
      this.logger.verbose(`Finding user with filter query`);
      userQuery = this.userModel.findOne(userOrUserIdOrUserFilter);
    }

    if (getUserOptions.withPassword) {
      userQuery = userQuery.select('+password');
    }

    if (getUserOptions.select) {
      userQuery = userQuery.select(getUserOptions.select);
    }

    userQuery.setOptions(getUserOptions);

    const userDocument = await userQuery.exec();

    if (!userDocument) {
      throw new OperationalException('User not found', HttpStatus.NOT_FOUND);
    }
    return userDocument;
  }

  async updateCurrentUserPassword(userOrUserId: User | string, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.getUser(userOrUserId, { withPassword: true });
    if (!(await user.comparePassword(updatePasswordDto.passwordCurrent))) {
      throw new OperationalException('Your current password is wrong', HttpStatus.UNAUTHORIZED);
    }
    user.password = updatePasswordDto.password;
    user.passwordConfirm = updatePasswordDto.passwordConfirm;
    await user.save();

    return user;
  }

  async updateUserNonLoginInfo(
    userOrUserId: User | string,
    updateLoggedInUserDto: UpdateLoggedInUserDto,
    photo?: Express.Multer.File,
  ) {
    const userDocument = await this.getUser(userOrUserId);
    if (_.isEmpty(updateLoggedInUserDto) && !photo) {
      return userDocument;
    }

    this.logger.verbose('Updating the found user.');
    const updateObject = { ...updateLoggedInUserDto, photo: photo?.filename || photo?.originalname };
    return this.userModel.findByIdAndUpdate(userDocument.id, updateObject, {
      runValidators: true,
      new: true,
    });
  }

  async deleteUser(userOrUserId: User | string) {
    const userDocument = await this.getUser(userOrUserId);
    await this.userModel.findByIdAndUpdate(userDocument.id, { active: false });
  }

  async activateUser(userOrUserId: User | string) {
    const userDocument = await this.getUser(userOrUserId, { disableMiddleware: true });
    const activatedUser = this.userModel
      .findByIdAndUpdate(userDocument.id, { active: true }, { new: true, disableMiddleware: true })
      .select('+active');
    return activatedUser;
  }

  async getAllUsers() {
    const userDocuments = await this.userModel
      .find()
      .select('+active')
      .sort({ createdAt: 1 })
      .setOptions({ disableMiddleware: true });
    return userDocuments;
  }

  async getUserById(userId: string) {
    return this.getUser(userId, { disableMiddleware: true, select: '+active' });
  }

  async preventAdminFromOperatingOnThemselves(adminUserOrUserId: User | string, userId: string) {
    const adminUserDocument = await this.getUser(adminUserOrUserId);
    if (adminUserDocument.id === userId) {
      throw new OperationalException(
        'You cannot operate on your own information using this endpoint. Use the Update signed in user endpoint.',
        HttpStatus.CONFLICT,
      );
    } else {
      return true;
    }
  }

  async updateUserById(
    adminUserOrUserId: User | string,
    userId: string,
    updateLoggedInUserDto: UpdateLoggedInUserDto,
    photo?: Express.Multer.File,
  ) {
    await this.preventAdminFromOperatingOnThemselves(adminUserOrUserId, userId);
    return this.updateUserNonLoginInfo(userId, updateLoggedInUserDto, photo);
  }

  async deleteUserById(adminUserOrUserId: User | string, userId: string) {
    await this.preventAdminFromOperatingOnThemselves(adminUserOrUserId, userId);
    return this.deleteUser(userId);
  }
}
