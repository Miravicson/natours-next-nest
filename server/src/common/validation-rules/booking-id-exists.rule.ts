import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Model } from 'mongoose';

import { Booking, BookingDocument } from '../db/mongoose-schemas/booking/booking.schema';

@ValidatorConstraint({ async: true })
@Injectable()
export class BookingIdExists implements ValidatorConstraintInterface {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<BookingDocument>) {}
  async validate(value: string): Promise<boolean> {
    return this.bookingModel
      .findById(value)
      .lean()
      .then((booking) => {
        return Boolean(booking);
      });
  }
  defaultMessage?(validationArguments?: ValidationArguments | undefined): string {
    return `A booking with id: ${validationArguments?.value} does not exist`;
  }
}
