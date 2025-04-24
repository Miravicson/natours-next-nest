import { ConfigModule } from '@nestjs/config';

import { cloudinaryServiceConfig } from './cloudinary-service.config';
import { EnvironmentVariables, validate } from './env.validation';
import { mailerModuleConfig } from './mailer-module.config';
import { paystackServiceConfig } from './paystack-service.config';
import { redisConfig } from './redis.config';
import { stripeServiceConfig } from './stripe-service.config';
import whichEnv from './which-env.config';

export const configModule = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  validate: (config) => validate(config, EnvironmentVariables),
  expandVariables: true,
  load: [
    whichEnv,
    mailerModuleConfig,
    paystackServiceConfig,
    cloudinaryServiceConfig,
    stripeServiceConfig,
    redisConfig,
  ],
});

export * from './cloudinary-service.config';
export * from './mailer-module.config';
export * from './paystack-service.config';
export * from './redis.config';
export * from './stripe-service.config';
