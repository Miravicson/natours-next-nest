import { CallbackWithoutResultAndOptionalError, Model, Query, Schema } from 'mongoose';
import slugify from 'slugify';

import { TourDocument } from './tour.schema';

export class TourSchemaHooks {
  public static registerWithHooks(schema: Schema) {
    schema.pre('save', this.slugifyTour);
    schema.pre(/^find/, this.excludeSecretTour);
    schema.pre(/^find/, this.populateGuidePaths);
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
}
