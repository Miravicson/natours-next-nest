import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AbstractRepository } from 'src/common/db/abstract-repository';
import { Review, ReviewDocument, ReviewModel } from 'src/common/db/mongoose-schemas/review/review.schema';
import { OperationalException } from 'src/common/exception-filters/OperationalException';

import { CreateReviewDto } from './dto/create-review.dto';
import { GetAllReviewDto } from './dto/great-all-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService extends AbstractRepository<ReviewDocument, Review> {
  logger = new Logger(this.constructor.name);

  constructor(@InjectModel(Review.name) private readonly reviewModel: ReviewModel) {
    super(reviewModel);
  }

  async preventReviewingNonBookedTour(tourId: string, userId: string) {
    const hasTourBeenBooked = this.reviewModel.hasTourBeenBooked(tourId, userId);
    if (!hasTourBeenBooked) {
      throw new OperationalException('You must book tour before posting a review', HttpStatus.BAD_REQUEST);
    } else {
      return true;
    }
  }

  async preventCreatingDuplicateReviewOnTour(tourId: string, userId: string) {
    const hasUserReviewedTour = this.reviewModel.hasUserReviewedTour(tourId, userId);
    if (hasUserReviewedTour) {
      throw new OperationalException(
        'You have already reviewed this tour hence you cannot create another review. You may update your previous review',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return true;
    }
  }

  async createReview(createReviewDto: CreateReviewDto) {
    await Promise.all([
      this.preventReviewingNonBookedTour(createReviewDto.tour as string, createReviewDto.user as string),
      this.preventCreatingDuplicateReviewOnTour(createReviewDto.tour as string, createReviewDto.user as string),
    ]);
    const review = await this.reviewModel.create(createReviewDto);
    return review;
  }

  async getAllReviews(getAllReviewDto: GetAllReviewDto, tourId?: string) {
    const extraFilter = tourId ? { tour: tourId } : {};
    const reviewDocument = await this.getAll({ ...getAllReviewDto }, extraFilter);
    return reviewDocument;
  }

  async getReviewById(reviewId: string) {
    return this.getOne(reviewId);
  }

  async updateReviewById(reviewId: string, updateReviewDto: UpdateReviewDto) {
    const review = await this.reviewModel.findByIdAndUpdate(reviewId, updateReviewDto, { new: true });
    return review;
  }

  async deleteReviewById(reviewId: string) {
    await this.reviewModel.findByIdAndDelete(reviewId);
  }
}
