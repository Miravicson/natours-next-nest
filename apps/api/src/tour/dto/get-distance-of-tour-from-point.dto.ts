import { IsEnum, IsLatLong } from 'class-validator';

import { DistanceUnit } from './get-tours-within-distance.dto';

export class GetDistanceOfTourFromPointDto {
  @IsLatLong()
  latLng: string;

  @IsEnum(DistanceUnit)
  unit: DistanceUnit;
}
