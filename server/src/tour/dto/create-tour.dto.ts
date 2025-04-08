import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { TourDifficulty } from '@/common/db/mongoose-schemas/tour/constant';

export class CreateTourDto {
  @IsString()
  @MaxLength(40)
  @MinLength(10)
  name: string;

  @IsNumber()
  @IsInt()
  @Min(1)
  duration: number;

  @IsNumber()
  @IsInt()
  @Min(1)
  maxGroupSize: number;

  @IsString()
  @IsEnum(TourDifficulty)
  difficulty: TourDifficulty;

  @IsNumber()
  @Min(1)
  @Type(() => Number)
  price: number;

  @IsString()
  @MaxLength(255)
  summary: string;

  @IsString()
  @IsOptional()
  imageCover?: string;

  @IsArray()
  images: string[];
}
