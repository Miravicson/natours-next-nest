import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, QueryWithHelpers, Schema as MongooseSchema, Types } from 'mongoose';

import { AbstractDocument } from '../abstract.schema';
import { Tour } from '../tour/tour.schema';
import { User } from '../user/user.schema';
import { BookingSchemaHooks } from './booking.schema.hooks';

@Schema({
  timestamps: true,
  toJSON: { virtuals: true },
  query: {},
})
export class Booking extends AbstractDocument {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Tour', required: [true, 'Booking must belong to a Tour'] })
  tour: Tour | Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: [true, 'Booking must belong to a User'] })
  user: User | Types.ObjectId;

  @Prop({
    type: Number,
    required: [true, 'Booking must have a price'],
  })
  price: number;

  @Prop({ type: Boolean, default: true })
  paid: boolean;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
BookingSchema.loadClass(Booking);
BookingSchemaHooks.registerWithHooks(BookingSchema);

export type BookingDocument = HydratedDocument<Booking>;

export type BookingModel = Model<Booking>;
