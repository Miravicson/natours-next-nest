import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, ValidateIf } from 'class-validator';

export class UpdateReviewDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  review?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @Min(1, { message: 'rating cannot be less than 1' })
  @Max(5, { message: 'rating cannot be greater than 5' })
  rating?: number;
}
