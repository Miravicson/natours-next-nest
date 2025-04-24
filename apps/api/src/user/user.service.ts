import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as _ from 'lodash';
import { FilterQuery, Model } from 'mongoose';

import { AbstractRepository } from '@/common/db/abstract-repository';
import { User, UserDocument, UserModel } from '@/common/db/mongoose-schemas/user/user.schema';
import { OperationalException } from '@/common/exception-filters/OperationalException';

import { GetAllUserDto } from './dto/get-all-user.dto';
import { UpdateLoggedInUserDto } from './dto/update-loggedin-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

export type UserFilterQuery = FilterQuery<UserDocument>;

export type GetUserOptions = {
  withPassword?: boolean;
  disableMiddleware?: boolean;
  select?: string;
};

@Injectable()
export class UserService extends AbstractRepository<UserDocument, User> {
  logger = new Logger(this.constructor.name);
  constructor(@InjectModel(User.name) private readonly userModel: UserModel) {
    super(userModel);
  }

  async updateCurrentUserPassword(userOrUserId: User | string, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.getOne(userOrUserId, { withPassword: true });
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
    const userDocument = await this.getOne(userOrUserId);
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
    const userDocument = await this.getOne(userOrUserId);
    await this.userModel.findByIdAndUpdate(userDocument.id, { active: false });
  }

  async activateUser(userOrUserId: User | string) {
    const userDocument = await this.getOne(userOrUserId, { disableMiddleware: true });
    const activatedUser = this.userModel
      .findByIdAndUpdate(userDocument.id, { active: true }, { new: true, disableMiddleware: true })
      .select('+active');
    return activatedUser;
  }

  async getAllUsers(getAllUserDto: GetAllUserDto) {
    console.log('All users dton', getAllUserDto);
    const userDocuments = await this.getAll({ ...getAllUserDto }, this.model.find().select('+active'));
    return userDocuments;
  }

  async getUserById(userId: string) {
    return this.getOne(userId, { disableMiddleware: true, select: '+active' });
  }

  async preventAdminFromOperatingOnThemselves(adminUserOrUserId: User | string, userId: string) {
    const adminUserDocument = await this.getOne(adminUserOrUserId);
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
