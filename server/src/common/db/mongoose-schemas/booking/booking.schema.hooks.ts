import { Schema } from 'mongoose';

export class BookingSchemaHooks {
  public static registerWithHooks(schema: Schema) {
    schema.pre(/^find/, this.removePropertyFromBooking);
  }

  static removePropertyFromBooking(this: any, next: () => void) {
    this.populate({
      path: 'user',
      select: 'name',
    }).populate({
      path: 'tour',
      select: 'name',
      options: {
        disableMiddleware: true,
        lean: { virtuals: false },
      },
    });
    next();
  }
}
