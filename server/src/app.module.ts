import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, RouterModule } from '@nestjs/core';
// import { DevtoolsModule } from '@nestjs/devtools-integration';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { CommonModule } from './common/common.module';
import { configModule } from './common/config';
import { AllExceptionsFilter } from './common/exception-filters/all-exceptions.filters';
import { ReviewModule } from './review/review.module';
import { SeederModule } from './seeder/seeder.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';

// const enableDevTools = DevtoolsModule.register({ // uncomment to enable devtools
//   http: process.env.NODE_ENV !== 'production',
// });

@Module({
  imports: [
    configModule,
    CommonModule,
    AuthModule,
    UserModule,
    BookingModule,
    TourModule,
    SeederModule,
    ReviewModule,
    // enableDevTools, //uncomment to enable devtools
  ],
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
