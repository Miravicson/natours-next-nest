import { IsMongoId, IsNumber, IsString, Validate } from 'class-validator';
import mongoose from 'mongoose';
import { TourIdExists } from 'src/common/validation-rules/tour-id-exists.rule';
import { UserIdExists } from 'src/common/validation-rules/user-id-exists.rule';

export class CreateBookingDto {
  // @IsString()
  @Validate(TourIdExists)
  @IsMongoId()
  tour: string | mongoose.Types.ObjectId;

  // @IsString()
  @IsMongoId()
  @Validate(UserIdExists)
  user: string | mongoose.Types.ObjectId;

  @IsNumber()
  price: number;
}
