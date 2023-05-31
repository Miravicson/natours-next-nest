import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Schema as MongooseSchema, Types } from 'mongoose';

import { AbstractDocument } from '../abstract.schema';
import { Tour } from '../tour/tour.schema';
import { User } from '../user/user.schema';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  query: {},
})
export class Review extends AbstractDocument {
  @Prop({
    type: String,
    trim: true,
    required: [true, 'Review cannot be empty'],
  })
  review: string;

  @Prop({
    type: Number,
    min: 1,
    max: 5,
  })
  rating: number;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'Tour',
    required: [true, 'Review must belong to a tour.'],
  })
  tour: Tour | Types.ObjectId | string;

  @Prop({
    type: Date,
    select: false,
  })
  createdAt: Date;

  @Prop({
    type: Date,
    select: false,
  })
  updatedAt: Date;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user.'],
  })
  user: User | Types.ObjectId;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
ReviewSchema.loadClass(Review);

export type ReviewDocument = HydratedDocument<Review>;

export interface ReviewModel extends Model<ReviewDocument> {
  calcAverageRatings: (tourId: string | Types.ObjectId | Tour) => void | Promise<void>;
  hasTourBeenBooked: (
    tourId: string | Types.ObjectId | Tour,
    userId: string | Types.ObjectId | User,
  ) => boolean | Promise<boolean>;
  hasUserReviewedTour: (
    tourId: string | Types.ObjectId | Tour,
    userId: string | Types.ObjectId | User,
  ) => boolean | Promise<boolean>;
}
