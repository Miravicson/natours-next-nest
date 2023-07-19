import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

import { getPasswordRegex } from '@/auth/constant';
import { Match } from '@/common/decorators/match.decorator';


export class UpdatePasswordDto {
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  passwordCurrent: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(getPasswordRegex(), { message: 'password is too weak' })
  password: string;

  @IsString()
  @Match('password', { message: 'Your new password must match with your confirmation password' })
  passwordConfirm: string;
}
