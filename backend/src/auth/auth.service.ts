import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { hashPassword, verifyPassword } from 'src/utils/encript-passwords.util';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }

  async login(user: any) {
    const payload = user;
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    const { name, username, password, email } = createUserDto;

    try {
      const encryptedPassword = await hashPassword(password);

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
