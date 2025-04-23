import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { FindParamsUserDto } from './dto/find-params-user.dto';
import { JwtGuard } from 'src/guards/jwt.guard';

@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id del usuario',
  })
  async findOne(@Param() params: FindParamsUserDto) {
    return await this.usersService.findOne(+params.id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id del usuario',
  })
  async update(
    @Param() params: FindParamsUserDto,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(+params.id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'id del usuario',
  })
  async remove(@Param() params: FindParamsUserDto) {
    return await this.usersService.remove(+params.id);
  }
}
