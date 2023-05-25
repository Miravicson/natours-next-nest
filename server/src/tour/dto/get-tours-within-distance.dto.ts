import { Type } from 'class-transformer';
import { IsEnum, IsLatLong, IsNumber } from 'class-validator';
import { GetAllResourceDto } from 'src/common/dto/get-all-resource.dto';

export enum DistanceUnit {
  mile = 'mi',
  kilometer = 'km',
}

export class GetTourWithinDistanceDto {
  @IsNumber()
  @Type(() => Number)
  distance: number;

  @IsEnum(DistanceUnit)
  unit: DistanceUnit;

  @IsLatLong()
  latLng: string;
}

export class QueryGetTourWithinDistanceDto extends GetAllResourceDto {}
