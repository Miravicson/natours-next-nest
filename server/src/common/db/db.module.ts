import { Logger, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentVariables } from 'src/config/env.validation';

import { MONGO_OPTIONS } from './constants/connections.constants';
import { Booking, BookingSchema } from './mongoose-schemas/booking/booking.schema';
import { Tour, TourSchema } from './mongoose-schemas/tour/tour.schema';
import { User, UserSchema } from './mongoose-schemas/user/user.schema';

const MONGO_MODELS = MongooseModule.forFeature([
  { name: User.name, schema: UserSchema },
  { name: Booking.name, schema: BookingSchema },
  { name: Tour.name, schema: TourSchema },
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
