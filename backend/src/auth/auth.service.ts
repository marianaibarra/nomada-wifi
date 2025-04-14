import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  async login(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'This action adds a new user';
  }

  async register() {
    // TODO: Implement register logic
  }

  async logout() {
    // TODO: Implement logout logic
  }
}
