import { IsMongoId, Validate, ValidateBy } from 'class-validator';
import { TourIdExists } from 'src/common/validation-rules/tour-id-exists.rule';

export class TourParamIdDto {
  @IsMongoId()
  @Validate(TourIdExists)
  id: string;
}
