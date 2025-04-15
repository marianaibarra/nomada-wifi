import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
