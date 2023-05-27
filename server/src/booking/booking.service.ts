import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { Booking, BookingDocument } from 'src/common/db/mongoose-schemas/booking/booking.schema';
import { StripeCreateSessionDto } from 'src/common/services/stripe/constants';
import { StripeService } from 'src/common/services/stripe/service';
import { TourService } from 'src/tour/tour.service';

import { CreateBookingDto } from './dto/create-booking.dto';
import { GetAllBookingsDto } from './dto/get-all-bookings.dto';
import { UpdateBookingDto } from './dto/updated-booking.dto';

@Injectable()
export class BookingService extends AbstractRepository<BookingDocument, Booking> {
  logger = new Logger(this.constructor.name);
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<BookingDocument>,
    private readonly tourService: TourService,
    private readonly stripeService: StripeService,
  ) {
    super(bookingModel);
  }

  async createBooking(createBookingDto: CreateBookingDto) {
    const booking = await this.bookingModel.create(createBookingDto);
    return booking;
  }

  async getAllBookings(getAllBookingsDto: GetAllBookingsDto) {
    const bookingDocuments = await this.getAll({ ...getAllBookingsDto });
    return bookingDocuments;
  }

  async getBookingById(bookingId: string) {
    return this.getOne(bookingId);
  }

  async deleteTourById(bookingId: string) {
    await this.model.findByIdAndDelete(bookingId);
  }

  async updateBookingById(bookingId: string, updateBookingDto: UpdateBookingDto) {
    const booking = await this.model.findByIdAndUpdate(bookingId, updateBookingDto, { new: true });
    return booking;
  }

  async getCheckoutSession(tourId: string) {
    const sessionDto = {} as StripeCreateSessionDto;

    // 1) Get currently booked tour
    const tour = await this.tourService.getTourById(tourId);

    // 2) Create checkout session
    const session = await this.stripeService.createCheckoutSession(sessionDto);

    return session;
  }
}
