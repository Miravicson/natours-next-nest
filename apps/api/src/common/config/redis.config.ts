import { registerAs } from '@nestjs/config';
import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

import { validate } from './env.validation';

class RedisConfig {
  @IsString()
  host: string;

  @IsNumber()
  @Type(() => Number)
  port = 6379;

  @IsString()
  username?: string;

  @IsString()
  password: string;

  @IsString()
  url: string;
}

const config = () => {
  const values: Record<string, any> = {};
  if (process.env['REDIS_URL']) {
    const redisUrlObject = new URL(process.env['REDIS_URL']);
    values.host = redisUrlObject.hostname;
    values.port = +redisUrlObject.port;
    values.username = redisUrlObject.username;
    values.password = redisUrlObject.password;
    values.url = redisUrlObject.href;
  } else {
    values.host = process.env['REDIS_HOST']!;
    values.port = process.env['REDIS_PORT']!;
    values.username = process.env['REDIS_USERNAME']!;
    values.password = process.env['REDIS_PASSWORD']!;

    const url = new URL('http://dummy.com');
    url.username = values.username;
    url.host = values.host;
    url.port = values.port;
    values.url = url.href.replace('http', 'redis');
  }

  return validate(values, RedisConfig);
};

export const redisConfig = registerAs('redisConfig', config);
