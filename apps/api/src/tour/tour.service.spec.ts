import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CreateTourDtoStub, UpdateTourDtoStub } from '@test/stubs/tour';

import { Review, ReviewModel, ReviewSchema } from '@/common/db/mongoose-schemas/review/review.schema';
import { Tour, TourDocument, TourModel, TourSchema } from '@/common/db/mongoose-schemas/tour/tour.schema';
import { PaginatedResponse } from '@/common/db/query-features';

import { ModelMocker } from '../../test/utils/mongodb.utils';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
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

  describe('updateTourById', () => {
    let tour: TourDocument;
    beforeEach(async () => {
      tour = await tourModel.create(CreateTourDtoStub());
    });
    it('should update the tour price', async () => {
      const updateTourDto = UpdateTourDtoStub();
      const updatedTour = await service.updateTourById(tour.id, updateTourDto);
      expect(tour.price).not.toEqual(updatedTour?.price);
      expect(updatedTour?.price).toEqual(updateTourDto.price);
    });
  });

  describe('deleteTourById', () => {
    it('should delete existing tour', async () => {
      let tour: TourDocument | null = await tourModel.create(CreateTourDtoStub());
      await service.deleteTourById(tour.id);
      tour = await tourModel.findById(tour.id);
      expect(tour).toBeNull();
    });
  });

  describe('getTopFiveCheap', () => {
    let tour1: TourDocument;
    let tour2: TourDocument;
    let tour3: TourDocument;
    let tour4: TourDocument;
    let tour5: TourDocument;
    let tour6: TourDocument;

    beforeEach(async () => {
      const baseTourDto = CreateTourDtoStub();
      const tourRequest = [100, 150, 200, 250, 300, 350]
        .map((price, idx) => ({ ...baseTourDto, price, name: `${baseTourDto.name}-${idx + 1}` }))
        .map((tourDto: CreateTourDto) => tourModel.create(tourDto));

      [tour1, tour2, tour3, tour4, tour5, tour6] = await Promise.all(tourRequest);
    });

    it('should return at most the five cheapest tour when they have same ratings', async () => {
      const tours: PaginatedResponse<TourDocument> = await service.getTopFiveCheap();

      expect(tours.docs).toHaveLength(5);
      [tour1, tour2, tour3, tour4, tour5].forEach((tour) =>
        expect(tours.docs.map((tour) => tour.name)).toContainEqual(tour.name),
      );
      expect(tours.docs.map((tour) => tour.name)).not.toContainEqual(tour6.name);
    });
  });
});
