import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { Tour, TourDocument, TourModel } from 'src/common/db/mongoose-schemas/tour/tour.schema';

import { CreateTourDto } from './dto/create-tour.dto';

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
}
