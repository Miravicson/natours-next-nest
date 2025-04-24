import { Logger, Module } from '@nestjs/common';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';

import { AppConfig } from '@/config/app.config';

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
      useFactory: async (appConfig: AppConfig) => {
        const logger = new Logger('Mongoose Connection');
        logger.verbose(`Database connected successfully`);

        return {
          ...MONGO_OPTIONS,
          uri: appConfig.mongoDbUrl,
          connectionFactory: (connection: any) => {
            connection.on('connected', () => {
              logger.verbose('MongoDB connected successfully');
            });
            connection.on('error', (error: Error) => {
              logger.error('MongoDB connection error:', error);
            });
            return connection;
          },
          retryAttempts: 5,
          retryDelay: 3000,
        };
      },
      inject: [AppConfig],
    }),
    MONGO_MODELS,
  ],
  providers: [],
  exports: [MONGO_MODELS],
})
export class DbModule {}
