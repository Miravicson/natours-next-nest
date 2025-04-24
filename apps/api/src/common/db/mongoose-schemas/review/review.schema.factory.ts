import { Logger } from '@nestjs/common';
import { CallbackWithoutResultAndOptionalError, Query, Schema } from 'mongoose';

import { BookingModel } from '../booking/booking.schema';
import { TourModel } from '../tour/tour.schema';
import { ReviewDocument, ReviewModel } from './review.schema';

export type ReviewEnhanceSchemaExternalModels = {
  tourModel: TourModel;
  bookingModel: BookingModel;
};

type CalculateAverageRatings = ReviewModel['calcAverageRatings'];
type HasTourBeenBooked = ReviewModel['hasTourBeenBooked'];
type HasUserReviewedTour = ReviewModel['hasUserReviewedTour'];

export class ReviewSchemaFactory {
  private static logger = new Logger(ReviewSchemaFactory.name);
  public static enhanceSchema(schema: Schema, models: ReviewEnhanceSchemaExternalModels) {
    this.registerWithHooks(schema);
    this.registerStatics(schema, models);
    this.applyIndices(schema);

    return schema;
  }

  private static registerWithHooks(schema: Schema) {
    schema.pre(/^find/, this.populateUserNameAndPhoto);
    schema.post(/save/, this.postSaveCalAvgRatings);
    schema.post(/^findOneAnd/, this.postFindOneAndCalcAvgRatings);
  }

  private static applyIndices(schema: Schema) {
    schema.index({ tour: 1, user: 1 }, { unique: true });
  }

  private static registerStatics(schema: Schema, models: ReviewEnhanceSchemaExternalModels) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;
    schema.statics.calcAverageRatings = async function (this: any, tourId) {
      const thisModel = this as ReviewModel;
      const [stats] = await thisModel.aggregate([
        { $match: { tour: tourId } },
        {
          $group: {
            _id: '$tour',
            nRatings: { $sum: 1 },
            avgRating: { $avg: '$rating' },
          },
        },
      ]);
      if (stats) {
        await models.tourModel.findByIdAndUpdate(tourId, {
          ratingsQuantity: stats.nRatings,
          ratingsAverage: stats.avgRating,
        });
      } else {
        await models.tourModel.findByIdAndUpdate(tourId, {
          ratingsQuantity: 0,
          ratingsAverage: 4.5,
        });
      }
    } as CalculateAverageRatings;

    /** A user should not be able to review a tour that has not been booked */
    schema.statics.hasTourBeenBooked = async function (this: any, tourId, userId) {
      that.logger.debug(`hasTourBeenBooked: ${tourId}, ${userId}`);
      const result = await models.bookingModel.exists({
        tour: tourId,
        user: userId,
      });

      return Boolean(result);
    } as HasTourBeenBooked;

    /** A user should not be able to create duplicate reviews on a particular tour */
    schema.statics.hasUserReviewedTour = async function (this: any, tourId, userId) {
      that.logger.debug(`hasUserReviewedTour: ${tourId}, ${userId}`);
      const thisModel = this as ReviewModel;
      const result = await thisModel.exists({ tour: tourId, user: userId });

      return Boolean(result);
    } as HasUserReviewedTour;
  }

  private static postSaveCalAvgRatings(this: ReviewDocument) {
    (this.constructor as ReviewModel).calcAverageRatings(this.tour);
  }

  private static async postFindOneAndCalcAvgRatings(docs: ReviewDocument) {
    if (docs) {
      await (docs.constructor as ReviewModel).calcAverageRatings(docs.tour);
    }
  }

  private static populateUserNameAndPhoto(
    this: Query<ReviewDocument, ReviewDocument>,
    next: CallbackWithoutResultAndOptionalError,
  ) {
    this.populate({
      path: 'user',
      select: 'name photo',
    });
    next();
  }
}
