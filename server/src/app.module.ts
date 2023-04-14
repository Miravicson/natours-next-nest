import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

// import { validate } from 'src/config/env.validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validate } from './config/env.validation';
import whichEnv from './config/which-env.config';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  validate: validate,
  expandVariables: true,
  load: [whichEnv],
});

@Module({
  imports: [configModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
