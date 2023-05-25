import { Aggregate, CallbackWithoutResultAndOptionalError, Model, Query, Schema } from 'mongoose';
import slugify from 'slugify';

import { TourDocument } from './tour.schema';

export class TourSchemaHooks {
  public static registerWithHooks(schema: Schema) {
    schema.pre('save', this.slugifyTour);
    schema.pre(/^find/, this.excludeSecretTour);
    schema.pre(/^find/, this.populateGuidePaths);
    schema.pre('aggregate', this.preAggreGateOperations);
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
    this: Query<TourDocument, TourDocument>,
    next: CallbackWithoutResultAndOptionalError,
  ) {
    this.populate({ path: 'guides', select: '-__v -passwordChangedAt' });
    next();
  }

  public static preAggreGateOperations(this: Aggregate<any>, next: CallbackWithoutResultAndOptionalError) {
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
