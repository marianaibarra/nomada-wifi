import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { FindParamsUserDto } from './dto/find-params-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id del usuario',
  })
  findOne(@Param() params: FindParamsUserDto) {
    return this.usersService.findOne(+params.id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id del usuario',
  })
  update(
    @Param() params: FindParamsUserDto,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(+params.id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id del usuario',
  })
  remove(@Param() params: FindParamsUserDto) {
    return this.usersService.remove(+params.id);
  }
}
