import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

import { TourController } from './tour.controller';
import { TourService } from './tour.service';

@Module({
  imports: [CommonModule],
  controllers: [TourController],
  providers: [TourService],
  exports: [TourService],
})
export class TourModule {}
