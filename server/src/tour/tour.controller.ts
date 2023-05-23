import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { Roles, RolesGuard } from 'src/user/roles.guard';

import { CreateTourDto } from './dto/create-tour.dto';
import { TourService } from './tour.service';

@Controller({
  path: ['tour', 'tours'],
  version: '1',
})
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Roles('admin', 'lead-guide')
  @Post('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createTour(@Body() createTourDto: CreateTourDto) {
    const response = await this.tourService.createTour(createTourDto);
    return ResponseFormatter.success('Tour', response);
  }
  async getAllTours() {}
}
