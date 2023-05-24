import { Type } from 'class-transformer';
import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateTourDto {
  @IsString()
  @MaxLength(40)
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
  @IsIn(['easy', 'medium', 'difficult'])
  difficulty: string;

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
