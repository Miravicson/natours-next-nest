import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { AllExceptionsFilter } from './common/exception-filters/all-exceptions.filters';
import { validate } from './config/env.validation';
import whichEnv from './config/which-env.config';
import { RolesGuard } from './user/roles.guard';
import { UserModule } from './user/user.module';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  validate: validate,
  expandVariables: true,
  load: [whichEnv],
});

@Module({
  imports: [configModule, CommonModule, AuthModule, UserModule],
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
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
