import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

import { getPasswordRegex } from '../constant';

export class ResetPasswordDto {
  @IsString()
  @IsNotEmpty()
  token: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(getPasswordRegex(), { message: 'password is too weak' })
  password: string;
}
