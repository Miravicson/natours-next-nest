import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { Tour, TourDocument, TourModel } from 'src/common/db/mongoose-schemas/tour/tour.schema';

import { CreateTourDto } from './dto/create-tour.dto';
import { GetAllToursDto } from './dto/get-all-tours.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class TourService extends AbstractRepository<TourDocument> {
  logger = new Logger(this.constructor.name);

  constructor(@InjectModel(Tour.name) private readonly tourModel: TourModel) {
    super(tourModel);
  }

  async createTour(createTourDto: CreateTourDto) {
    const tour = await this.tourModel.create(createTourDto);
    return tour;
  }

  async getAllTours(getAllToursDto: GetAllToursDto) {
    this.logger.log(`${this.getAllTours.name}: ${JSON.stringify(getAllToursDto, null, 2)}`);
    const tourDocuments = await this.getAll({ ...getAllToursDto });
    return tourDocuments;
  }

  async getTourById(tourId: string) {
    return this.getOne(tourId);
  }

  async updateTourById(tourId: string, updateTourDto: UpdateTourDto) {
    const tour = await this.tourModel.findByIdAndUpdate(tourId, updateTourDto, { new: true });
    return tour;
  }

  async deleteTourById(id: string) {
    await this.tourModel.findByIdAndDelete(id);
  }
}
