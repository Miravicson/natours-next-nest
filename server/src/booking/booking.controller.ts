import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { TourParamIdDto } from 'src/tour/dto/tour-param-id.dto';
import { RolesGuard } from 'src/user/roles.guard';
import { Roles } from 'src/user/roles.guard';

import { BookingService } from './booking.service';
import { BookingParamIdDto } from './dto/booking-param-id.dto';
import { CreateBookingDto } from './dto/create-booking.dto';
import { GetAllBookingsDto } from './dto/get-all-bookings.dto';
import { UpdateBookingDto } from './dto/updated-booking.dto';

@Controller({
  path: ['booking', 'bookings'],
  version: '1',
})
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/checkout-session/:tourId')
  async getCheckoutSession(@Param() tourParamIdDto: TourParamIdDto) {
    const response = await this.bookingService.getCheckoutSession(tourParamIdDto.id);
    return ResponseFormatter.success('Checkout session', response);
  }

  @Roles('admin', 'lead-guide')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post('/')
  async createBookings(@Body() createBookingDto: CreateBookingDto) {
    const response = await this.bookingService.createBooking(createBookingDto);
    return ResponseFormatter.success('Booking', response);
  }

  @Roles('admin', 'lead-guide')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/')
  async getAllBookings(@Query() getAllBookingsDto: GetAllBookingsDto) {
    const response = await this.bookingService.getAllBookings(getAllBookingsDto);
    return ResponseFormatter.success('Bookings', response);
  }

  @Roles('admin', 'lead-guide')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  async getBookingById(@Param('id') bookingId: string) {
    const response = await this.bookingService.getBookingById(bookingId);
    return ResponseFormatter.success('Booking', response);
  }

  @Roles('admin', 'lead-guide')
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(204)
  async deleteTourById(@Param('id') bookingId: string) {
    await this.bookingService.deleteTourById(bookingId);
  }

  @Roles('admin', 'lead-guide')
  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateBookingById(@Param() bookingParamIdDto: BookingParamIdDto, @Body() updateBookingDto: UpdateBookingDto) {
    const response = await this.bookingService.updateBookingById(bookingParamIdDto.id, updateBookingDto);
    return ResponseFormatter.success('Booking', response);
  }
}
