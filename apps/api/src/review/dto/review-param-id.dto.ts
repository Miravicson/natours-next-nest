import { IsMongoId, IsNotEmpty, IsOptional, Validate, ValidateIf } from 'class-validator';

import { ReviewIdExists } from '@/common/validation-rules/review-id-exists.rule';
// import { ReviewIdExists } from 'src/common/validation-rules/review-id-exists.rule';

export class ReviewPramIdDto {
  @IsMongoId()
  @ValidateIf((o) => !Boolean(o.reviewId))
  @Validate(ReviewIdExists)
  @IsNotEmpty()
  @IsOptional()
  id: string;

  @IsMongoId()
  @ValidateIf((o) => !Boolean(o.id))
  @Validate(ReviewIdExists)
  @IsNotEmpty()
  @IsOptional()
  reviewId: string;
}
