import { IsMongoId, Validate } from 'class-validator';
import { BookingIdExists } from '@/common/validation-rules/booking-id-exists.rule';

export class BookingParamIdDto {
  @IsMongoId()
  @Validate(BookingIdExists)
  id: string;
}
