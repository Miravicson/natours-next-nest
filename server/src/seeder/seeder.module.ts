import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { CommonModule } from 'src/common/common.module';

import { DatabaseSeed } from './database.seed';

@Module({
  imports: [CommonModule, CommandModule],
  providers: [DatabaseSeed],
  exports: [DatabaseSeed],
})
export class SeederModule {}
