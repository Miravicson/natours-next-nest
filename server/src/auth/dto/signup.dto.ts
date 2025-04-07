import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
  NotEquals,
} from 'class-validator';

import { RoleEnum } from '@/common/db/mongoose-schemas/user/constants';
import { Match } from '@/common/decorators/match.decorator';

export class SignupCredentialsDto {
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @IsOptional()
  @IsAlphanumeric()
  @MaxLength(255)
  username?: string;

  @IsOptional()
  @IsEnum(RoleEnum)
  @NotEquals(RoleEnum.admin)
  role: RoleEnum;

  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsStrongPassword()
  password: string;

  @IsString()
  @Match('password', { message: 'password must match' })
  passwordConfirm: string;
}
