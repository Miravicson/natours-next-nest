import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { Tour, TourModel } from '@/common/db/mongoose-schemas/tour/tour.schema';

import { TourService } from './tour.service';

describe('TourService', () => {
  let service: TourService;
  let tourModel: TourModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TourService,
        {
          provide: getModelToken(Tour.name),
          useValue: tourModel,
        },
      ],
    }).compile();

    service = module.get<TourService>(TourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
