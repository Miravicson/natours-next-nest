import { Module } from '@nestjs/common';

import { DbModule } from './db/db.module';
import { MailModule } from './mail/mail.module';
import { TourIdExists } from './validation-rules/tour-id-exists.rule';
import { UserIdExists } from './validation-rules/user-id-exists.rule';

@Module({
  imports: [DbModule, MailModule],
  providers: [UserIdExists, TourIdExists],
  exports: [DbModule, MailModule, UserIdExists, TourIdExists],
})
export class CommonModule {}
