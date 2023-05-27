import { plainToClass, plainToInstance } from 'class-transformer';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, validateSync } from 'class-validator';

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

  @IsString()
  COOKIE_EXPIRY: string;

  @IsString()
  JWT_EXPIRY: string;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  CLIENT_EMAIL_CONFIRM_URL: string;

  @IsString()
  CLIENT_BASE_URL: string;

  @IsString()
  CLIENT_RESET_PASSWORD: string;
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
