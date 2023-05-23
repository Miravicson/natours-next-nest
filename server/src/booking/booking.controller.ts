import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { RolesGuard } from 'src/user/roles.guard';
import { Roles } from 'src/user/roles.guard';

import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller({
  path: ['booking', 'bookings'],
  version: '1',
})
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  @Roles('admin', 'lead-guide')
  @Post('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createBookings(@Body() createBookingDto: CreateBookingDto) {
    const response = await this.bookingService.createBooking(createBookingDto);
    return ResponseFormatter.success('Booking', response);
  }
  async getAllBookings() {}
  async getBooking() {}
  async updateBooking() {}
  async deleteBooking() {}
}
