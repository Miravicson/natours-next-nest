import { Configuration, Value } from '@itgorillaz/configify';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { StringValue } from 'ms';

import { stringToBoolean } from '@/common/lib/string-to-boolean';

export type Environment = Lowercase<keyof typeof Environment>;

export const Environment = {
  Development: 'development',
  Production: 'production',
  Test: 'test',
  Provision: 'provision',
} as const;

@Configuration()
export class AppConfig {
  @Value('NODE_ENV', { default: Environment.Development })
  environment: Environment;


  @Value('MONGODB_URL')
  @IsNotEmpty()
  mongoDbUrl: string;


  @IsNumber()
  @Value('PORT', { parse: Number.parseInt, default: 3000 })
  port: number;

  @IsNotEmpty()
  @IsString()
  @Value('APP_HOST_NAME', { default: '0.0.0.0' })
  hostname: string;

  @IsString()
  @IsNotEmpty()
  @Value('JWT_SECRET')
  jwtSecret: string;

  @IsString()
  @Value('JWT_EXPIRES_IN', { default: '1hr' }) //for units https://www.npmjs.com/package/ms
  jwtExpiresIn: StringValue;

  @IsString()
  @IsNotEmpty()
  @Value('REFRESH_TOKEN_SECRET')
  jwtRefreshSecret: string;

  @IsString()
  @Value('REFRESH_TOKEN_EXPIRES_IN', { default: '7d' }) //for units https://www.npmjs.com/package/ms
  jwtRefreshExpiresIn: StringValue;

  @IsNumber()
  @Value('JWT_ROUNDS_OF_SALTING', { default: 10, parse: Number.parseInt })
  bcryptSaltOrRound: number;

  @IsString()
  @IsNotEmpty()
  @Value('CORS_ORIGIN', {
    default: 'http://localhost:5173,http://localhost:3000',
  })
  corsOrigin: string;

  @IsBoolean()
  @Value('CORS_ALLOW_SECURITY_CREDENTIALS', {
    default: true,
    parse: stringToBoolean,
  })
  allowSecurityCredentials: boolean;
}
