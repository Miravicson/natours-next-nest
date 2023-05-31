import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  imports: [CommonModule],
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
