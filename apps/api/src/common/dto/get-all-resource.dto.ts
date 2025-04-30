import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class GetAllResourceDto {
  @IsString()
  @IsOptional()
  sort?: string;

  @IsString()
  @IsOptional()
  fields?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Type(() => Number || 1)
  @Min(0)
  page: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Type(() => Number || 10)
  @Min(1)
  @IsOptional()
  size: number;
}
