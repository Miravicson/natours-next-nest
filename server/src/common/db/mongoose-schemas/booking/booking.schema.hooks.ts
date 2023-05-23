import { Model, Query, Schema } from 'mongoose';
import { excludeFrom } from 'src/common/lib';

import { BookingModel } from './booking.schema';

export class BookingSchemaHooks {
  public static registerWithHooks(schema: Schema) {
    schema.pre(/^find/, this.removePropertyFromBooking);
  }

  static removePropertyFromBooking(this: any, next: () => void) {
    // const exclusionList = excludeFrom(Tour.getSchemaFields(), ['name']);
    // const onlyName = `-${exclusionList.join(' -')} -__v`;
    this.populate({
      path: 'user',
      select: 'name',
    }).populate({
      path: 'tour',
      select: '+name',
    });
    next();
  }
}
