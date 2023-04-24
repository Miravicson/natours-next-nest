import { Module } from '@nestjs/common';

import { DbModule } from './db/db.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [DbModule, MailModule],
  providers: [],
  exports: [DbModule, MailModule],
})
export class CommonModule {}
