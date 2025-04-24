import { CallbackWithoutResultAndOptionalError, Schema } from 'mongoose';

export class BookingSchemaFactory {
  public static registerWithHooks(schema: Schema) {
    schema.pre(/^find/, this.removePropertyFromBooking);
  }

  static removePropertyFromBooking(this: any, next: CallbackWithoutResultAndOptionalError) {
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
