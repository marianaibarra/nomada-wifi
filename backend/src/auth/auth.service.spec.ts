import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from 'src/utils/encript-passwords.util';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, JwtService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get<AuthService>(AuthService);
    prisma = module.get<DeepMockProxy<PrismaClient>>(PrismaService);
  });

  it('validateUser should return a non null object for valid data', async () => {
    const user: User = {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      password: 'hashed_password',
      email: 'test@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const hashedPass = await hashPassword(user.password);

    const userWithHashedPass: User = {
      ...user,
      password: hashedPass,
    };

    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(userWithHashedPass);

    const userValidated: User | null = await service.validateUser(
      user.email,
      user.password,
    );

    expect(userValidated).not.toBe(null);
  });

  it('validateUser should return null for unhashed password', async () => {
    const user: User = {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      password: 'i-am-not-hashed',
      email: 'test@example.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prisma.user, 'findUnique').mockResolvedValue(user);

    const userValidated: User | null = await service.validateUser(
      user.email,
      user.password,
    );

    expect(userValidated).toBe(null);
  });

  it('register should create a new user', async () => {
    const createUser: CreateUserDto = {
      email: 'test@example.com',
      name: 'John Doe',
      username: 'johndoe',
      password: 'this-this-a-password',
    };

    const fullUser = {
      id: 1,
      ...createUser,
      password: await hashPassword(createUser.password),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(prisma.user, 'create').mockResolvedValue(fullUser);

    const newUser = await service.register(createUser);

    expect(newUser).toHaveProperty('id');
    expect(newUser).toHaveProperty('name');
    expect(newUser).toHaveProperty('email');
    expect(newUser).toHaveProperty('username');
    expect(newUser).not.toHaveProperty('password');
  });

  // TODO: Test login, mock jwtService, just verify that it returns an object like { access_token: string }
});
