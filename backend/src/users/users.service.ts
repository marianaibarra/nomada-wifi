import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/utils/encript-passwords.util';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
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

  async findAll() {
    const users = await this.prismaService.user.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, username, password, email } = updateUserDto;

    try {
      let updateData = {
        name,
        username,
        email,
      };

      if (password) {
        const encryptedPassword = await hashPassword(password);
        Object.assign(updateData, { password: encryptedPassword });
      }

      const updatedUser = await this.prismaService.user.update({
        where: { id },
        data: updateData,
      });

      return {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        username: updatedUser.username,
      };
    } catch (error) {
      if (error.code === 'P2002') {
        // TODO: Implementar interceptor para respuestas de error.
        throw new Error('Username or email already exists');
      }
      throw new Error('Error updating user');
    }
  }

  async remove(id: number) {
    const deletedUser = await this.prismaService.user.delete({
      where: { id },
    });

    return {
      id: deletedUser.id,
      name: deletedUser.name,
      email: deletedUser.email,
      username: deletedUser.username,
    };
  }
}
