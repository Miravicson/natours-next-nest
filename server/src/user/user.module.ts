import { Module } from '@nestjs/common';
import { DbModule } from 'src/common/db/db.module';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DbModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
