import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';

import { validate } from './env.validation';

class StripeServiceConfig {
  @IsString()
  secretKey: string;
  webHookSecret: string;
}

const config = () => {
  const values: StripeServiceConfig = {
    secretKey: process.env['STRIPE_SECRET_KEY']!,
    webHookSecret: process.env['STRIPE_WEBHOOK_SECRET']!,
  };
  return validate({ ...values }, StripeServiceConfig);
};

export const stripeServiceConfig = registerAs('stripeServiceConfig', config);
