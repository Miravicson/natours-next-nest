import { IsMongoId, IsNumber, Validate } from 'class-validator';
import mongoose from 'mongoose';
import { TourIdExists } from 'src/common/validation-rules/tour-id-exists.rule';
import { UserIdExists } from 'src/common/validation-rules/user-id-exists.rule';

export class CreateBookingDto {
  @IsMongoId()
  @Validate(TourIdExists)
  tour: string | mongoose.Types.ObjectId;

  @IsMongoId()
  @Validate(UserIdExists)
  user: string | mongoose.Types.ObjectId;

  @IsNumber()
  price: number;
}
