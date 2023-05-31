import { Aggregate, CallbackWithoutResultAndOptionalError, Query, Schema } from 'mongoose';
import mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import slugify from 'slugify';

import { BookingModel } from '../booking/booking.schema';
import { TourDocument, TourModel } from './tour.schema';

export type TourEnhanceSchemaExternalModels = {
  bookingModel: BookingModel;
};

export class TourSchemaFactory {
  public static enhanceSchema(schema: Schema, models: TourEnhanceSchemaExternalModels) {
    this.registerWithHooks(schema);
    this.applyIndices(schema);
    this.registerStatics(schema, models);
    schema.plugin(mongooseLeanVirtuals);
    return schema;
  }

  private static applyIndices(schema: Schema) {
    schema.index({ price: 1, ratingsAverage: -1 });
    schema.index({ slug: 1 });
    schema.index({ startLocation: '2dsphere' });
  }

  private static registerStatics(schema: Schema, models: TourEnhanceSchemaExternalModels) {
    schema.statics.getSchemaFields = function (this: any) {
      const that = this as TourModel;
      const schemaFields = Object.keys(that.schema.obj);
      return schemaFields;
    };
  }

  private static registerWithHooks(schema: Schema) {
    schema.pre('save', this.slugifyTour);
    schema.pre(/^find/, this.excludeSecretTour);
    schema.pre(/^find/, this.populateGuidePaths);
    schema.pre('aggregate', this.preAggregateOperations);
  }

  public static slugifyTour(this: TourDocument, next: CallbackWithoutResultAndOptionalError) {
    this.slug = slugify(this.name, { lower: true });
    next();
  }

  public static excludeSecretTour(
    this: Query<TourDocument, TourDocument>,
    next: CallbackWithoutResultAndOptionalError,
  ) {
    this.find({ secreteTour: { $ne: true } });
    next();
  }

  public static populateGuidePaths(
    this: Query<TourDocument, TourDocument> & { options: { disableMiddleware: boolean } },
    next: CallbackWithoutResultAndOptionalError,
  ) {
    if (!this.options.disableMiddleware) {
      this.populate({ path: 'guides', select: '-__v -passwordChangedAt' });
    } else {
      console.log('Skipping running of middleware', TourSchemaFactory.populateGuidePaths.name);
    }
    next();
  }

  public static preAggregateOperations(this: Aggregate<any>, next: CallbackWithoutResultAndOptionalError) {
    const [firstPipeLine] = this.pipeline();
    // Add the a match pipeline to exclude secret tours
    this.pipeline().unshift({
      $match: { secretTour: { $ne: true } },
    });
    // if the first pipeline is a $geoNear stage, promote it to the front
    if (Object.keys(firstPipeLine).includes('$geoNear')) {
      this.pipeline().splice(1, 1); // remove it from the second position
      this.pipeline().unshift(firstPipeLine); // push to the front
    }
    next();
  }
}
