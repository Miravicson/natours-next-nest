import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Schema as MongooseSchema, Types } from 'mongoose';

import { AbstractDocument } from '../abstract.schema';
import { User } from '../user/user.schema';

interface Location {
  type: string;
  coordinates: [number, number];
  address: string;
  description: string;
  day: number;
}

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
  query: {},
  virtuals: {
    durationWeeks: {
      get(this: TourDocument): number {
        return this.duration / 7;
      },
    },
    reviews: {
      options: {
        ref: 'Review',
        foreignField: 'tour',
        localField: '_id',
      },
    },
  },
})
export class Tour extends AbstractDocument {
  @Prop({
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A tour name must have less or equal than 40 characters'],
    minlength: [10, 'A tour name must have at least 10 characters'],
    // validate: [validator.isAlpha, 'Tour name must only contain characters'],
  })
  name: string;

  @Prop({
    type: String,
  })
  slug: string;

  @Prop({
    type: Number,
    required: [true, 'A tour must have a duration'],
  })
  duration: number;

  @Prop({
    type: Number,
    required: [true, 'A tour must have a group size'],
  })
  maxGroupSize: number;

  @Prop({
    type: String,
    enum: {
      values: ['easy', 'medium', 'difficult'],
      message: 'Difficulty is either: easy, medium or difficult',
    },
    required: [true, 'A tour must have a difficulty'],
    trim: true,
    default: 'easy',
  })
  difficulty: string;

  @Prop({
    type: Number,
    default: 4.5,
    min: [1, 'Rating must be equal to or above 1.0'],
    max: [5, 'Rating must be equal or less than 5.0'],
    set: (val: number) => Math.round(val * 10) / 10,
  })
  ratingsAverage: number;

  @Prop({ type: Number, default: 0 })
  ratingsQuantity: number;

  @Prop({
    type: Number,
    required: [true, 'A tour must have a price'],
  })
  price: number;

  @Prop({
    type: Number,
    validate: {
      // Caveat !!!! 'this' only points to current doc on NEW document creation this validator only works for document creation and not for update
      validator: function (this: Tour, val: number) {
        return val < this.price; // return true for non-error conditions
      },
      message: 'Discount price ({VALUE}): should be below the regular price',
    },
  })
  priceDiscount: number;

  @Prop({
    type: String,
    trim: true,
    required: [true, 'A summary must be provided'],
  })
  summary: string;

  @Prop({ type: String, trim: true })
  description: string;

  @Prop({
    type: String,
    trim: true,
    required: [true, 'A tour must have a cover image'],
  })
  imageCover: string;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: [Date] })
  startDates: Date[];

  @Prop({
    type: Boolean,
    default: false,
  })
  secretTour: boolean;

  @Prop({
    // GeoJSON
    type: {
      type: String,
      default: 'Point',
      enum: ['Point'],
    },
    coordinates: [Number], // longitude, latitude
    address: String,
    description: String,
  })
  startLocation: string;
  @Prop({
    type: [
      // specifying an array creates an embedded document
      {
        type: {
          type: String,
          default: 'Point',
          enum: ['Point'],
        },
        coordinates: [Number], // longitude, latitude
        address: String,
        description: String,
        day: Number,
      },
    ],
  })
  locations: Location;
  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  guides: User[] | Types.ObjectId[];

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
}

export const TourSchema = SchemaFactory.createForClass(Tour);
TourSchema.loadClass(Tour);
export type TourDocument = HydratedDocument<Tour>;
export interface TourModel extends Model<TourDocument> {
  getSchemaFields: () => void;
}
