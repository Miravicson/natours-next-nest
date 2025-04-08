import { Configuration, Value } from '@itgorillaz/configify';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { StringValue } from 'ms';

import { stringToBoolean } from '@/common/lib/string-to-boolean';



@Configuration()
export class SecurityConfig {
  @IsString()
  @Value('CORS_ORIGINS', { default: 'http://localhost:3000' })
  corsOrigins: string;

  @IsBoolean()
  @Value('CORS_ALLOW_SECURITY_CREDENTIALS', {
    default: true,
    parse: stringToBoolean,
  })
  allowSecurityCredentials: boolean;

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

  @IsBoolean()
  @Value('SECURE_COOKIE', {
    default: true,
    parse: stringToBoolean,
  })
  isSecureCookie: boolean;

  @IsNumber()
  @Value('JWT_ROUNDS_OF_SALTING', { default: 10, parse: Number.parseInt })
  bcryptSaltOrRound: number;

  @IsString()
  @IsNotEmpty()
  @Value('JWT_PASSWORD_RESET_EXPIRES_IN', { default: '30mins' }) //for units https://www.npmjs.com/package/ms
  passwordResetExpiresIn: StringValue;
}
