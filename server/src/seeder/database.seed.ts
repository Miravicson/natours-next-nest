import { faker } from '@faker-js/faker';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { hash } from 'argon2';
import { Command } from 'nestjs-command';

import { Tour, TourModel } from '@/common/db/mongoose-schemas/tour/tour.schema';
import { User, UserModel } from '@/common/db/mongoose-schemas/user/user.schema';
import { choice } from '@/common/lib';

import reviews from './data/reviews.json';
import tours from './data/tours.json';

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

  @Command({ command: 'reset:db', describe: 'clear data from db' })
  async resetDB() {
    await this.deleteData();
  }

  private async importUsers() {
    const adminUsers = [
      {
        name: 'Victor Ughonu',
        email: 'admin@natours.io',
        photo: 'vic-1.jpg',
        role: 'admin',
        password: 'vic123456',
        active: true,
      },
    ];

    const otherUsers = Array.from({ length: 30 }, () => {
      const photos = ['user-2.jpg', 'user-3.jpg', 'user-4.jpg', 'user-5.jpg', 'user-6.jpg'];
      const roles = ['user', 'lead-guide', 'guide'];

      return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        photo: choice(photos),
        role: choice(roles),
        password: 'password-strong',
        active: choice([true, false]),
      };
    });

    const hashedUsers = await Promise.all(
      adminUsers.concat(otherUsers).map(async (user) => {
        const { password, ...rest } = user;

        return {
          ...rest,
          password: await hash(password),
        };
      }),
    );

    await this.userModel.create(hashedUsers, { validateBeforeSave: false });
    return hashedUsers;
  }

  // private async getReviewData() {}

  private async importTours() {
    const guides = (await this.userModel.find({ role: 'guide' }).exec()).map((guide) => {
      return guide.id;
    });

    console.log({ guides });
    const toursWithGuides = tours.map((tour) => {
      const tourGuides = Array.from({ length: 3 }, () => choice(guides));

      return {
        ...tour,
        guides: tourGuides,
      };
    });

    await this.tourModel.create(toursWithGuides, { validateBeforeSave: false });
    return toursWithGuides;
  }

  async importData() {
    try {
      await this.importUsers();
      await this.importTours();
      // await Promise.all([this.tourModel.create(tours)]);
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
