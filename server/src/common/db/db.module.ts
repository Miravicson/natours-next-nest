import { Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';

import { EnvironmentVariables } from '../config/env.validation';
import { MONGO_OPTIONS } from './constants/connections.constants';
import { Booking, BookingSchema } from './mongoose-schemas/booking/booking.schema';
import { CloudinaryImage, CloudinaryImageSchema } from './mongoose-schemas/images.schema';
import { Review, ReviewSchema } from './mongoose-schemas/review/review.schema';
import { ReviewSchemaFactory } from './mongoose-schemas/review/review.schema.factory';
import { Tour, TourSchema } from './mongoose-schemas/tour/tour.schema';
import { TourSchemaFactory } from './mongoose-schemas/tour/tour.schema.factory';
import { User, UserSchema } from './mongoose-schemas/user/user.schema';

const MONGO_MODELS = MongooseModule.forFeatureAsync([
  { name: User.name, useFactory: () => UserSchema },
  { name: Booking.name, useFactory: () => BookingSchema },
  {
    name: Tour.name,
    useFactory: (bookingModel) => TourSchemaFactory.enhanceSchema(TourSchema, { bookingModel }),
    inject: [getModelToken(Booking.name)],
  },
  { name: CloudinaryImage.name, useFactory: () => CloudinaryImageSchema },
  {
    name: Review.name,
    useFactory: (tourModel, bookingModel) =>
      ReviewSchemaFactory.enhanceSchema(ReviewSchema, { tourModel, bookingModel }),
    inject: [getModelToken(Tour.name), getModelToken(Booking.name)],
  },
]);

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService<EnvironmentVariables>) => {
        const mongoDBUrl = configService.get('MONGODB_URL', { infer: true });
        const logger = new Logger('Mongoose Connection');
        logger.verbose(`Database connected successfully`);

        return {
          ...MONGO_OPTIONS,
          uri: mongoDBUrl,
        };
      },
      inject: [ConfigService],
    }),
    MONGO_MODELS,
  ],
  providers: [],
  exports: [MONGO_MODELS],
})
export class DbModule {}
