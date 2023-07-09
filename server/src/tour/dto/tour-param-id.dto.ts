import { IsMongoId, IsNotEmpty, IsOptional, Validate, ValidateBy, ValidateIf } from 'class-validator';

import { TourIdExists } from '@/common/validation-rules/tour-id-exists.rule';


export class TourParamIdDto {
  @IsMongoId()
  @ValidateIf((o) => !Boolean(o.tourId))
  @Validate(TourIdExists)
  @IsNotEmpty()
  @IsOptional()
  id: string;

  @IsMongoId()
  @ValidateIf((o) => !Boolean(o.id))
  @Validate(TourIdExists)
  @IsNotEmpty()
  @IsOptional()
  tourId: string;
}
