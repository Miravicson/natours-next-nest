import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { redisConfig } from './config';
import { DbModule } from './db/db.module';
import { MailModule } from './mail/mail.module';
import { ExternalServiceModule } from './services/service.module';
import { BookingIdExists } from './validation-rules/booking-id-exists.rule';
import { ReviewIdExists } from './validation-rules/review-id-exists.rule';
import { TourIdExists } from './validation-rules/tour-id-exists.rule';
import { UserIdExists } from './validation-rules/user-id-exists.rule';

@Module({
  imports: [
    DbModule,
    MailModule,
    ExternalServiceModule,
    ScheduleModule.forRoot(),
    BullModule.forRootAsync({
      useFactory: async (redisConf: ConfigType<typeof redisConfig>) => {
        return {
          defaultJobOptions: {
            removeOnComplete: true,
            removeOnFail: false,
          },
          redis: redisConf,
        };
      },
      inject: [redisConfig.KEY],
    }),
  ],
  providers: [UserIdExists, TourIdExists, BookingIdExists, ReviewIdExists],
  exports: [DbModule, MailModule, UserIdExists, TourIdExists, BookingIdExists, ExternalServiceModule, ReviewIdExists],
})
export class CommonModule {}
