import { registerAs } from '@nestjs/config';
import { Type } from 'class-transformer';
import { IsDefined, IsString, ValidateNested } from 'class-validator';

import { validate } from './env.validation';

class MailerModuleTransportAuth {
  @IsString()
  user: string;

  @IsString()
  pass: string;
}

class MailerModuleDefaults {
  @IsString()
  from: string;
}
class MailerModuleTransport {
  @IsString()
  host: string;

  @IsString()
  port: string;

  @ValidateNested()
  @Type(() => MailerModuleTransportAuth)
  @IsDefined()
  auth: MailerModuleTransportAuth;
}

export class MailerModuleConfig {
  @ValidateNested()
  @Type(() => MailerModuleTransport)
  @IsDefined()
  transport: MailerModuleTransport;

  @ValidateNested()
  @Type(() => MailerModuleDefaults)
  @IsDefined()
  defaults: MailerModuleDefaults;
}

const config = () => {
  const values: Record<string, any> = {
    transport: {
      host: process.env['EMAIL_HOST']!,
      port: process.env['EMAIL_PORT']!,
      auth: {
        user: process.env['EMAIL_USERNAME']!,
        pass: process.env['EMAIL_PASSWORD']!,
      },
    },
    defaults: {
      from: process.env['EMAIL_FROM']!,
    },
  };

  return validate(values, MailerModuleConfig);
};

export const mailerModuleConfig = registerAs('mailerModuleConfig', config);
