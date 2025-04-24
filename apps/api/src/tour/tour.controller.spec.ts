import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { Tour, TourModel } from '@/common/db/mongoose-schemas/tour/tour.schema';

import { TourController } from './tour.controller';
import { TourService } from './tour.service';

describe('TourController', () => {
  let controller: TourController;
  let tourModel: TourModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourController],
      providers: [TourService, { provide: getModelToken(Tour.name), useValue: tourModel }],
    }).compile();

    controller = module.get<TourController>(TourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have all relevant methods', () => {
    const methods: (keyof TourController)[] = [
      'getAllTours',
      'createTour',
      'getTopFiveCheap',
      'getTourStats',
      'getToursWithinDistance',
      'getDistanceOfToursFromPoint',
      'getAllBookingOnTour',
      'getAllReviewsOnTour',
      'createReviewOnTour',
      'getTourById',
      'updateTourById',
      'deleteTourById',
    ];
    methods.forEach((method: keyof TourController) => {
      expect(controller[method]).toBeDefined();
    });
  });


});
