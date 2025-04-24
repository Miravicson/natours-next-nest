import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';

import { AbstractRepository } from '@/common/db/abstract-repository';
import { Booking, BookingDocument, BookingModel } from '@/common/db/mongoose-schemas/booking/booking.schema';
import { Tour } from '@/common/db/mongoose-schemas/tour/tour.schema';
import { User } from '@/common/db/mongoose-schemas/user/user.schema';
import { StripeCreateSessionDto } from '@/common/services/stripe/constants';
import { StripeService } from '@/common/services/stripe/service';
import { TourService } from '@/tour/tour.service';

import { CreateBookingDto } from './dto/create-booking.dto';
import { GetAllBookingsDto } from './dto/get-all-bookings.dto';
import { UpdateBookingDto } from './dto/updated-booking.dto';

@Injectable()
export class BookingService extends AbstractRepository<BookingDocument, Booking> {
  logger = new Logger(this.constructor.name);
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: BookingModel,
    private readonly tourService: TourService,
    private readonly stripeService: StripeService,
  ) {
    super(bookingModel);
  }

  async createBooking(createBookingDto: CreateBookingDto) {
    const booking = await this.bookingModel.create(createBookingDto);
    return booking;
  }

  async getAllBookings(getAllBookingsDto: GetAllBookingsDto, tourId?: string, userId?: string) {
    const extraFilter: Record<string, unknown> = {};
    if (tourId) {
      extraFilter['tour'] = tourId;
    }
    if (userId) {
      extraFilter['user'] = userId;
    }
    const bookingDocuments = await this.getAll({ ...getAllBookingsDto }, extraFilter);
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

  private getStripeCallbackUrl(req: Request, slug: string) {
    const successUrl = `${req.protocol}://${req.get('host')}/my-tours?alert=booking`;
    const cancelUrl = `${req.protocol}://${req.get('host')}/tour/${slug}`;
    return { successUrl, cancelUrl };
  }

  private getStripeImage(req: Request, imageCover: string) {
    return `${req.protocol}://${req.get('host')}/img/tours/${imageCover}`;
  }

  private getTransactionReference(tourId: string) {
    return `NAT-${Date.now()}-${tourId}`;
  }

  private createLineItem(tour: Tour) {
    const result: StripeCreateSessionDto['lineItems'] = [
      {
        price: `${tour.price * 100}`,
        quantity: 1,
      },
    ];

    return result;
  }

  async getCheckoutSession(tourId: string, user: User, req: Request) {
    // 1) Get currently booked tour
    const tour = await this.tourService.getTourById(tourId);

    const { successUrl, cancelUrl } = this.getStripeCallbackUrl(req, tour.slug);
    const customerEmail = user.email;
    const clientReferenceId = this.getTransactionReference(tourId);
    const lineItems = this.createLineItem(tour);
    const sessionDto: StripeCreateSessionDto = {
      paymentMethodTypes: ['card', 'paypal'],
      successUrl,
      cancelUrl,
      customerEmail,
      clientReferenceId,
      lineItems,
    };

    // 2) Create checkout session
    const session = await this.stripeService.createCheckoutSession(sessionDto);

    return session;
  }
}
