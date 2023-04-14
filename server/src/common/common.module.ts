import { Module } from '@nestjs/common';

import { DbModule } from './db/db.module';

@Module({
  imports: [DbModule],
  providers: [],
  exports: [DbModule],
})
export class CommonModule {}
