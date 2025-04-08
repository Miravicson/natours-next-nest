import { Configuration, Value } from '@itgorillaz/configify';
import { IsBoolean, IsString, IsUrl } from 'class-validator';

import { stringToBoolean } from '@/common/lib/string-to-boolean';


@Configuration()
export class SwaggerConfig {
  @IsBoolean()
  @Value('SWAGGER_ENABLED', {
    default: true,
    parse: stringToBoolean,
  })
  enabled: boolean;

  @IsString()
  @Value('SWAGGER_TITLE', { default: 'Bloomers Commerce' })
  title: string;

  @IsString()
  @Value('SWAGGER_DESCRIPTION', { default: 'From parents, for parents' })
  description: string;

  @IsString()
  @Value('SWAGER_DOCUMENTATION_VERSION', { default: '1.0' })
  version: string;

  @IsString()
  @Value('SWAGGER_PATH', { default: 'swagger' })
  path: string;

  @IsString()
  @Value('SWAGGER_PASSWORD', { default: 'password' })
  password: string;

  @IsUrl()
  @Value('SWAGGER_FAVICON', { default: 'https://company.com/favicon.ico' })
  favicon: string;
}
