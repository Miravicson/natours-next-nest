import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { CommonModule } from './common/common.module';
import { AllExceptionsFilter } from './common/exception-filters/all-exceptions.filters';
import { validate } from './config/env.validation';
import { mailerModuleConfig } from './config/mailer-module.config';
import whichEnv from './config/which-env.config';
import { SeederModule } from './seeder/seeder.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  validate: validate,
  expandVariables: true,
  load: [whichEnv, mailerModuleConfig],
});

@Module({
  imports: [configModule, CommonModule, AuthModule, UserModule, BookingModule, TourModule, SeederModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
