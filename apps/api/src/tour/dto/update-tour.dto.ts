import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';
export class UpdateTourDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Type(() => Number)
  price: number;
}
