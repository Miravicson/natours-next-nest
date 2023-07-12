import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateTourDtoStub } from '@test/stubs/tour';

import { Review, ReviewModel, ReviewSchema } from '@/common/db/mongoose-schemas/review/review.schema';
import { Tour, TourDocument, TourModel, TourSchema } from '@/common/db/mongoose-schemas/tour/tour.schema';

import { ModelMocker } from '../../test/utils/mongodb.utils';
import { CreateTourDto } from './dto/create-tour.dto';
import { TourService } from './tour.service';

describe('TourService', () => {
  let service: TourService;
  let tourModel: TourModel;
  let reviewModel: ReviewModel;
  const modelMocker = new ModelMocker();

  beforeAll(async () => {
    tourModel = await modelMocker.getModel<TourModel>(Tour.name, TourSchema);
    reviewModel = await modelMocker.getModel<ReviewModel>(Review.name, ReviewSchema);
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TourService,
        {
          provide: getModelToken(Tour.name),
          useValue: tourModel,
        },
      ],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<TourService>(TourService);
  });

  afterEach(async () => {
    await modelMocker.afterEach();
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await modelMocker.afterAll();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createTour', () => {
    it('should call TourService.createOne', async () => {
      const createTourDto = CreateTourDtoStub();
      const createOneSpy = jest.spyOn(service, 'createOne');
      await service.createTour(createTourDto);
      expect(createOneSpy).toHaveBeenCalledWith(createTourDto);
    });
  });

  describe('getTourById', () => {
    it('should call TourService.getOne with expected input', async () => {
      const createTourDto = CreateTourDtoStub();
      const tour = await tourModel.create(createTourDto);
      const getOneSpy = jest.spyOn(service, 'getOne');
      const getOneOptions = { populateOptions: { path: 'reviews' } };

      await service.getTourById(tour.id);
      expect(getOneSpy).toHaveBeenCalledWith(tour.id, getOneOptions);
    });
  });
});
