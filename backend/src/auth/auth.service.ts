import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { encryptPassword } from 'src/utils/encript-passwords.util';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}

  async login(loginDto: LoginUserDto) {
    console.log(loginDto);
    return 'This action adds a new user';
  }

  async register(createUserDto: CreateUserDto) {
    const { name, username, password, email } = createUserDto;

    try {
      const encryptedPassword = await encryptPassword(password);

      const newUser = await this.prismaService.user.create({
        data: {
          name,
          username,
          password: encryptedPassword,
          email,
        },
      });

      return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        // TODO: Implementar interceptor para respuestas de error.
        throw new Error('Username or email already exists');
      }
      throw new Error('Error registering user');
    }
  }

  async logout() {
    // TODO: Implement logout logic
  }
}
