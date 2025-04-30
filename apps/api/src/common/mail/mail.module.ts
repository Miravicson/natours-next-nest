// import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'node:path';

import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MailerModule, MailerOptions } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

import { mailerModuleConfig } from '@/common/config';

import { MailConsumer } from './mail.consumer';
import { MailService } from './mail.service';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'MAIL_QUEUE',
    }),
    MailerModule.forRootAsync({
      useFactory: async (
        mailModuleConfig: ConfigType<typeof mailerModuleConfig>,
      ) => {
        const mailerModuleConfig: MailerOptions = {
          transport: mailModuleConfig.transport,
          defaults: mailModuleConfig.defaults,
          preview: true,
          template: {
            dir: join(__dirname, 'templates'),
            adapter: new PugAdapter(),
            options: {
              strict: true,
            },
          },
        };
        return mailerModuleConfig;
      },
      inject: [mailerModuleConfig.KEY],
    }),
  ],
  providers: [MailService, MailConsumer],
  exports: [MailService],
})
export class MailModule {}
