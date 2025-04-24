import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { Review, ReviewModel } from '@/common/db/mongoose-schemas/review/review.schema';

import { ReviewService } from './review.service';

describe('ReviewService', () => {
  let service: ReviewService;
  let reviewModel: ReviewModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: getModelToken(Review.name),
          useValue: reviewModel,
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
