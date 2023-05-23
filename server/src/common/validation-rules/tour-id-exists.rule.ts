import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Model } from 'mongoose';

import { Tour, TourDocument } from '../db/mongoose-schemas/tour/tour.schema';

@ValidatorConstraint({ async: true })
@Injectable()
export class TourIdExists implements ValidatorConstraintInterface {
  constructor(@InjectModel(Tour.name) private tourModel: Model<TourDocument>) {}
  async validate(value: string): Promise<boolean> {
    return this.tourModel
      .findById(value)
      .lean()
      .then((tour) => {
        return Boolean(tour);
      });
  }
  defaultMessage?(validationArguments?: ValidationArguments | undefined): string {
    return `A tour with id: ${validationArguments?.value} does not exist`;
  }
}
