import { Module } from '@nestjs/common';

import { CommonModule } from '@/common/common.module';
import { TourModule } from '@/tour/tour.module';

import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [CommonModule, TourModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
