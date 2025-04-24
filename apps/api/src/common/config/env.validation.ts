import { plainToClass, plainToInstance } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, validateSync } from 'class-validator';
import { StringValue } from 'ms';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

export class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsString()
  APP_NAME: string;

  @IsBoolean()
  @IsOptional()
  isProduction?: boolean;

  @IsBoolean()
  @IsOptional()
  isDevelopment?: boolean;

  @IsBoolean()
  @IsOptional()
  isTesting?: boolean;

  // @IsUrl({ protocols: ['mongodb'], require_valid_protocol: false })
  @IsString()
  MONGODB_URL: string;

  /** Miliseconds */
  @IsString()
  COOKIE_EXPIRY: StringValue;

  @IsString()
  JWT_EXPIRY: StringValue;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  @IsNotEmpty()
  CLIENT_EMAIL_CONFIRM_URL: string;

  @IsString()
  @IsNotEmpty()
  CLIENT_BASE_URL: string;

  @IsString()
  @IsNotEmpty()
  CLIENT_RESET_PASSWORD_URL: string;
}

type Constructor<T extends object = object> = new () => T;

export function validate<T extends object>(config: Record<string, unknown>, ValidatorClass: Constructor<T>) {
  const validatedConfig = plainToClass(ValidatorClass, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
