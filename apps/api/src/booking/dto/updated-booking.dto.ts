import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateBookingDto {
  @IsBoolean()
  @IsOptional()
  paid?: boolean;
}
