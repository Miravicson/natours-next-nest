import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { User, UserDocument } from 'src/common/db/mongoose-schemas/user/user.schema';
import { OperationalException } from 'src/common/exception-filters/OperationalException';

import { UpdatePasswordDto } from './dto/update-password.dto';

export type UserFilterQuery = FilterQuery<UserDocument>;

@Injectable()
export class UserService extends AbstractRepository<UserDocument> {
  logger = new Logger(this.constructor.name);
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {
    super(userModel);
  }
  async getUser(userFilter: UserFilterQuery): Promise<UserDocument>;
  async getUser(userFilter: UserFilterQuery, withPassword: boolean): Promise<UserDocument>;
  async getUser(userOrUserId: User | string, withPassword: boolean): Promise<UserDocument>;
  async getUser(
    userOrUserIdOrUserFilter: User | string | UserFilterQuery,
    withPassword = false,
  ): Promise<UserDocument> {
    let userQuery;

    if (typeof userOrUserIdOrUserFilter === 'string') {
      userQuery = this.userModel.findById(userOrUserIdOrUserFilter);
    } else if (userOrUserIdOrUserFilter instanceof User) {
      userQuery = this.userModel.findById(userOrUserIdOrUserFilter._id);
    } else {
      userQuery = this.userModel.findOne(userOrUserIdOrUserFilter);
    }

    if (withPassword) {
      userQuery = userQuery.select('+password');
    }
    const userDocument = await userQuery.exec();

    if (!userDocument) {
      throw new OperationalException('User not found', HttpStatus.NOT_FOUND);
    }
    return userDocument;
  }

  async updateCurrentUserPassword(userOrUserId: User | string, updatePasswordDto: UpdatePasswordDto) {
    const user = await this.getUser(userOrUserId, true);
    if (!(await user.comparePassword(updatePasswordDto.passwordCurrent))) {
      throw new OperationalException('Your current password is wrong', HttpStatus.UNAUTHORIZED);
    }
    user.password = updatePasswordDto.password;
    user.passwordConfirm = updatePasswordDto.passwordConfirm;
    await user.save();
  }
}
