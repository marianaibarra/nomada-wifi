import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    console.log('findAll');
    return `This action returns all users`;
  }

  findOne(id: number) {
    console.log('findOne ', id);
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log('update', id, updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    console.log('remove', id);
    return `This action removes a #${id} user`;
  }
}
