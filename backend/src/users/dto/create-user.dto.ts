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
  @ApiProperty({
    example: 'maridev',
  })
  username: string;

  @IsString()
  @ApiProperty({
    example: 'Mariana Zapata',
  })
  name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    example: 'marianazapata@correo.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  password: string;
}
