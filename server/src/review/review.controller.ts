import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/common/db/mongoose-schemas/user/user.schema';
import { ReqUser } from 'src/common/decorators/req-user.decorator';
import { ResponseFormatter } from 'src/common/lib/response-formatter';
import { Roles, RolesGuard } from 'src/user/roles.guard';

import { CreateReviewDto } from './dto/create-review.dto';
import { GetAllReviewDto } from './dto/great-all-review.dto';
import { ReviewPramIdDto } from './dto/review-param-id.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewService } from './review.service';

@UseGuards(JwtAuthGuard)
@Controller({ path: ['review', 'reviews'], version: '1' })
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Get()
  async getAllReviews(@Query() getAllReviewDto: GetAllReviewDto, tourId?: string) {
    const response = await this.reviewService.getAllReviews(getAllReviewDto, tourId);
    return ResponseFormatter.success('Reviews', response);
  }

  @Roles('user')
  @UseGuards(RolesGuard)
  @Post()
  async createReview(@Body() createReviewDto: CreateReviewDto, @ReqUser() reqUser: User, tourId?: string) {
    createReviewDto.user = createReviewDto.user || reqUser._id;
    createReviewDto.tour = createReviewDto.tour || (tourId as string);
    const response = await this.reviewService.createReview(createReviewDto);

    return ResponseFormatter.success('Review', response);
  }

  @Get(':id')
  async getReviewById(@Param('id') reviewId: string) {
    const response = await this.reviewService.getReviewById(reviewId);
    return ResponseFormatter.success('Review', response);
  }

  @Roles('user', 'admin')
  @Patch(':id')
  async updateReviewById(@Param() reviewParamIdDto: ReviewPramIdDto, @Body() updateReviewDto: UpdateReviewDto) {
    const response = await this.reviewService.updateReviewById(reviewParamIdDto.id, updateReviewDto);
    return ResponseFormatter.success('Review', response);
  }

  @Roles('user', 'admin')
  @HttpCode(204)
  @Delete(':id')
  async deleteReviewById(@Param('id') reviewId: string) {
    await this.reviewService.deleteReviewById(reviewId);
  }
}
