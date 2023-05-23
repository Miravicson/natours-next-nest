import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { Booking, BookingDocument } from 'src/common/db/mongoose-schemas/booking/booking.schema';

import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingService extends AbstractRepository<BookingDocument> {
  logger = new Logger(this.constructor.name);
  constructor(@InjectModel(Booking.name) private readonly bookingModel: Model<BookingDocument>) {
    super(bookingModel);
  }

  async createBooking(createBookingDto: CreateBookingDto) {
    const booking = await this.bookingModel.create(createBookingDto);
    return booking;
  }
}
