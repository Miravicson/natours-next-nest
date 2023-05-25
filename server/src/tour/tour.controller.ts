import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { Roles, RolesGuard } from 'src/user/roles.guard';

import { CreateTourDto } from './dto/create-tour.dto';
import { GetAllToursDto } from './dto/get-all-tours.dto';
import { GetDistanceOfTourFromPointDto } from './dto/get-distance-of-tour-from-point.dto';
import { GetTourWithinDistanceDto, QueryGetTourWithinDistanceDto } from './dto/get-tours-within-distance.dto';
import { TourParamIdDto } from './dto/tour-param-id.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { TourService } from './tour.service';

@Controller({
  path: ['tour', 'tours'],
  version: '1',
})
export class TourController {
  private logger = new Logger(this.constructor.name);
  constructor(private readonly tourService: TourService) {}

  @Roles('admin', 'lead-guide')
  @Post('/')
  @UseGuards(JwtAuthGuard, RolesGuard)
  async createTour(@Body() createTourDto: CreateTourDto) {
    const response = await this.tourService.createTour(createTourDto);
    return ResponseFormatter.success('Tour', response);
  }

  @Get('/')
  async getAllTours(@Query() getAllToursDto: GetAllToursDto) {
    const response = await this.tourService.getAllTours(getAllToursDto);
    return ResponseFormatter.success('Tours', response);
  }

  @Get('/top-5-cheap')
  async getTopFiveCheap() {
    const response = await this.tourService.getTopFiveCheap();

    return ResponseFormatter.success('Tour', response);
  }
  @Get('/tour-stats')
  async getTourStats() {
    const response = await this.tourService.getTourStats();
    return ResponseFormatter.success('Tour Stats', response);
  }

  @Roles('admin', 'lead-guide', 'guide')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('/monthly-plan/:year')
  async getMonthlyPlanByYear(@Param('year', ParseIntPipe) year: number) {
    const response = await this.tourService.getMonthlyPlanByYear(year);
    return ResponseFormatter.success('Tour By Year', response);
  }

  @Get('/tours-within/:distance/center/:latLng/unit/:unit')
  async getToursWithinDistance(
    @Param() getTourWithinDistanceDto: GetTourWithinDistanceDto,
    @Query() queryGetTourWithinDistanceDto: QueryGetTourWithinDistanceDto,
  ) {
    const response = await this.tourService.getToursWithinDistance(
      getTourWithinDistanceDto,
      queryGetTourWithinDistanceDto,
    );
    return ResponseFormatter.success('Tour Within Distance', response);
  }

  @Get('/distances/:latLng/unit/:unit')
  async getDistanceOfToursFromPoint(@Param() getDistanceOfTourFromPointDto: GetDistanceOfTourFromPointDto) {
    // do something
    const response = await this.tourService.getDistanceOfToursFromPoint(getDistanceOfTourFromPointDto);
    return ResponseFormatter.success('Tour Within Distance', response);
  }

  @Get(':id')
  async getTourById(@Param('id') tourId: string) {
    const response = await this.tourService.getTourById(tourId);
    return ResponseFormatter.success('Tour', response);
  }

  @Get(':id/reviews')
  async getTourReviews() {
    // do something
  }
  @Get(':id/bookings')
  async getTourBookings() {
    // do something
  }

  @Roles('admin', 'tours')
  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'imageCover',
        maxCount: 1,
      },
      { name: 'images', maxCount: 3 },
    ]),
  )
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateTourById(
    @Param() tourParamDto: TourParamIdDto,
    @UploadedFiles() files: { imageCover?: Express.Multer.File[]; images?: Express.Multer.File[] },
    @Body() updateTourDto: UpdateTourDto,
  ) {
    const response = await this.tourService.updateTourById(tourParamDto.id, updateTourDto);
    return ResponseFormatter.success('Tour', response);
  }

  @Roles('admin', 'tours')
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @HttpCode(204)
  async deleteTourById(@Param() tourParamDto: TourParamIdDto) {
    await this.tourService.deleteTourById(tourParamDto.id);
  }
}
