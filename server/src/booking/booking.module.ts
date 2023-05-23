import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [CommonModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
