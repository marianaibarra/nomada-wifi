import { IsNumberString } from 'class-validator';

export class FindParamsUserDto {
  @IsNumberString()
  id: string;
}
