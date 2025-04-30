import { Module } from '@nestjs/common';

import { CommonModule } from '@/common/common.module';

import { TourController } from './tour.controller';
import { TourGateWay } from './tour.gateway';
import { TourService } from './tour.service';

@Module({
  imports: [CommonModule],
  controllers: [TourController],
  providers: [TourService, TourGateWay],
  exports: [TourService],
})
export class TourModule {}
