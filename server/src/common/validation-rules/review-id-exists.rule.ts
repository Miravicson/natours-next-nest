import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { Model } from 'mongoose';

import { Review, ReviewDocument, ReviewModel } from '../db/mongoose-schemas/review/review.schema';

@ValidatorConstraint({ async: true })
@Injectable()
export class ReviewIdExists implements ValidatorConstraintInterface {
  constructor(@InjectModel(Review.name) private reviewModel: ReviewModel) {}
  async validate(value: string): Promise<boolean> {
    try {
      const review = await this.reviewModel.findById(value).lean();
      return Boolean(review);
    } catch (error) {
      return false;
    }
  }
  defaultMessage?(validationArguments?: ValidationArguments | undefined): string {
    return `A review with id: ${validationArguments?.value} does not exist`;
  }
}
