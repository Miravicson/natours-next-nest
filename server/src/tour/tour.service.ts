import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { AbstractRepository } from '@/common/db/abstract-repository';
import { Tour, TourDocument, TourModel } from '@/common/db/mongoose-schemas/tour/tour.schema';

import { CreateTourDto } from './dto/create-tour.dto';
import { GetAllToursDto } from './dto/get-all-tours.dto';
import { GetDistanceOfTourFromPointDto } from './dto/get-distance-of-tour-from-point.dto';
import {
  DistanceUnit,
  GetTourWithinDistanceDto,
  QueryGetTourWithinDistanceDto,
} from './dto/get-tours-within-distance.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class TourService extends AbstractRepository<TourDocument> {
  logger = new Logger(this.constructor.name);

  constructor(@InjectModel(Tour.name) private readonly tourModel: TourModel) {
    super(tourModel);
  }

  async createTour(createTourDto: CreateTourDto) {
    const tour = await this.createOne(createTourDto);
    return tour;
  }

  async getAllTours(getAllToursDto: GetAllToursDto) {
    const tourDocuments = await this.getAll({ ...getAllToursDto });
    return tourDocuments;
  }

  async getTourById(tourId: string) {
    return this.getOne(tourId, {
      populateOptions: { path: 'reviews' },
    });
  }

  async updateTourById(tourId: string, updateTourDto: UpdateTourDto) {
    const tour = await this.tourModel.findByIdAndUpdate(tourId, updateTourDto, { new: true });
    return tour;
  }

  async deleteTourById(id: string) {
    await this.tourModel.findByIdAndDelete(id);
  }

  async getTopFiveCheap() {
    const tourDocuments = await this.getAll({
      sort: '-ratingsAverage,price',
      size: 5,
      fields: 'name,price,ratingsAverage,summary,difficulty',
      page: 1,
    });

    return tourDocuments;
  }

  async getTourStats() {
    const stats = await this.tourModel.aggregate([
      {
        $match: { ratingsAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          // _id: null,
          // _id: '$difficulty',
          // _id: '$ratingsAverage',
          _id: { $toUpper: '$difficulty' },
          numTours: { $sum: 1 },
          numRatings: { $sum: '$ratingsQuantity' },
          avgRating: { $avg: '$ratingsAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: {
          avgPrice: 1,
        },
      },
      // {
      //   $match: {
      //     _id: { $ne: 'EASY' },
      //   },
      // },
    ]);

    return stats;
  }

  async getMonthlyPlanByYear(year: number) {
    const yearlyPlan = await this.model.aggregate([
      { $unwind: '$startDates' },
      // { $match: { $eq: [year, { $year: '$startDates' }] } },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          // _id: '$null',
          numTourStarts: { $sum: 1 },
          tours: { $push: '$name' },
        },
      },
      {
        $addFields: {
          month: '$_id',
        },
      },

      {
        $project: {
          _id: 0,
        },
      },
      {
        $sort: {
          numTourStarts: -1,
        },
      },
      {
        $limit: 12,
      },
    ]);
    return yearlyPlan;
  }

  async getToursWithinDistance(
    { distance, latLng, unit }: GetTourWithinDistanceDto,
    queryGetTourWithinDistanceDto: QueryGetTourWithinDistanceDto,
  ) {
    const [lat, lng] = latLng.split(',');
    const earthRadius = new Map<DistanceUnit, number>([
      [DistanceUnit.mile, 3963.2],
      [DistanceUnit.kilometer, 6378.1],
    ]);

    const radius = distance / earthRadius.get(unit)!;
    const tours = this.getAll(
      { ...queryGetTourWithinDistanceDto },
      this.model.find({
        startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
      }),
    );

    return tours;
  }

  async getDistanceOfToursFromPoint({ latLng, unit }: GetDistanceOfTourFromPointDto) {
    const meterTo = new Map<DistanceUnit, number>([
      [DistanceUnit.mile, 0.000621371],
      [DistanceUnit.kilometer, 0.001],
    ]);

    const [lat, lng] = latLng.split(',');
    const distances = await this.model.aggregate([
      {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [Number.parseInt(lng) * 1, Number.parseInt(lat) * 1],
          },
          distanceField: 'distance',
          distanceMultiplier: meterTo.get(unit)! || meterTo.get(DistanceUnit.kilometer)!,
        },
      },
      {
        $project: {
          distance: 1,
          name: 1,
        },
      },
      // {
      //   $set: {
      //     distance: 2,
      //   },
      // },
    ]); // requires that at least one of the fields has a geospatial index

    return distances;
  }
}
