import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'admin@natours.io' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'vic123456' })
  @IsString()
  password: string;
}
