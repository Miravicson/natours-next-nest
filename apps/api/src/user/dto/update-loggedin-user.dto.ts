import { IsAlphanumeric, IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateLoggedInUserDto {
  @IsOptional()
  @MinLength(2)
  @MaxLength(255)
  name?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  email?: string;

  @IsOptional()
  @IsAlphanumeric()
  @MaxLength(255)
  username?: string;
}
