import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { Roles, RolesGuard } from 'src/user/roles.guard';

import { CreateTourDto } from './dto/create-tour.dto';
import { TourParamIdDto } from './dto/tour-param-id.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
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

  @Get('/')
  async getAllTours() {
    const response = await this.tourService.getAllTours();
    return ResponseFormatter.success('Tours', response);
  }

  @Get(':id')
  async getTourById(@Param('id') tourId: string) {
    const response = await this.tourService.getTourById(tourId);
    return ResponseFormatter.success('Tour', response);
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
