import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Model } from 'mongoose';

import { User, UserDocument, UserModel } from '../db/mongoose-schemas/user/user.schema';

@ValidatorConstraint({ async: true })
@Injectable()
export class UserIdExists implements ValidatorConstraintInterface {
  constructor(@InjectModel(User.name) private userModel: UserModel) {}

  async validate(value: string): Promise<boolean> {
    return this.userModel.isExisting(value);
  }

  defaultMessage(validationArguments?: ValidationArguments | undefined): string {
    return `A user with user id: ${validationArguments?.value} does not exists`;
  }
}
