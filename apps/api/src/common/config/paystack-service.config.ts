import { registerAs } from '@nestjs/config';
import { IsString } from 'class-validator';

import { validate } from './env.validation';

export class PaystackServiceConfig {
  @IsString()
  baseUrl: string;

  @IsString()
  secretKey: string;
}

const config = () => {
  const values: PaystackServiceConfig = {
    baseUrl: process.env['PAYSTACK_BASE_URL']!,
    secretKey: process.env['PAYSTACK_SECRET_KEY']!,
  };

  return validate({ ...values }, PaystackServiceConfig);
};

export const paystackServiceConfig = registerAs('paystackServiceConfig', config);
