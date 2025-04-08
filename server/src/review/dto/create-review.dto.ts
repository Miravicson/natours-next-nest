import { Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, Validate } from 'class-validator';
import mongoose from 'mongoose';

import { TourIdExists } from '@/common/validation-rules/tour-id-exists.rule';
import { UserIdExists } from '@/common/validation-rules/user-id-exists.rule';


export class CreateReviewDto {
  @IsOptional()
  @IsMongoId()
  @Validate(TourIdExists)
  tour?: string | mongoose.Types.ObjectId;

  @IsMongoId()
  @IsOptional()
  @Validate(UserIdExists)
  user?: string | mongoose.Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  review: string;

  @IsNumber()
  @Type(() => Number)
  @Min(1, { message: 'Rating cannot be less than 1' })
  @Max(5, { message: 'Rating must have a maximum value of 5' })
  rating: number;
}
