import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Command } from 'nestjs-command';
import { Tour, TourModel } from 'src/common/db/mongoose-schemas/tour/tour.schema';
import { User, UserModel } from 'src/common/db/mongoose-schemas/user/user.schema';

import reviews from './data/reviews.json';
import tours from './data/tours.json';
import users from './data/users.json';

@Injectable()
export class DatabaseSeed {
  private logger = new Logger(this.constructor.name);
  constructor(
    @InjectModel(User.name) private userModel: UserModel,
    @InjectModel(Tour.name) private tourModel: TourModel,
  ) {}

  @Command({ command: 'seed:db', describe: 'load users, tours, bookings and reviews' })
  async seedDatabase() {
    await this.deleteData();
    await this.importData();
  }

  async importData() {
    try {
      await Promise.all([this.userModel.create(users, { validateBeforeSave: false }), this.tourModel.create(tours)]);
    } catch (error) {
      this.logger.error((error as Error).message, error);
    }
  }

  async deleteData() {
    try {
      await Promise.all([this.tourModel.deleteMany(), this.userModel.deleteMany()]);
    } catch (error) {
      this.logger.error((error as Error).message, error);
    }
  }
}
