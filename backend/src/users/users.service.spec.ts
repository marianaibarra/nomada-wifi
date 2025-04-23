import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

describe('UsersService', () => {
  let service: UsersService;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockDeep<PrismaClient>())
      .compile();

    service = module.get<UsersService>(UsersService);
    prisma = module.get<DeepMockProxy<PrismaClient>>(PrismaService);
  });

  it('should create a new user', async () => {
    const createdUser: User = {
      createdAt: new Date(),
      email: 'test@example.com',
      id: 1,
      name: 'testuser',
      password: 'password',
      updatedAt: new Date(),
      username: 'test',
    };

    jest.spyOn(prisma.user, 'create').mockResolvedValue(createdUser);

    const createUserDto: CreateUserDto = {
      email: createdUser.email,
      name: createdUser.name,
      password: createdUser.password,
      username: createdUser.username,
    };

    const result = await service.create(createUserDto);

    expect(prisma.user.create).toHaveBeenCalled();
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('email');
    expect(result).toHaveProperty('username');
    expect(result).not.toHaveProperty('password');
  });

  it('should throw error on duplicated email or username', async () => {
    jest.spyOn(prisma.user, 'create').mockImplementation(() => {
      throw new PrismaClientKnownRequestError('', {
        clientVersion: '',
        code: 'P2002',
        batchRequestIdx: 0,
        meta: {},
      });
    });

    const createUserDto: CreateUserDto = {
      email: 'test@example.com',
      name: 'testuser',
      password: 'password',
      username: 'test',
    };

    try {
      await service.create(createUserDto);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should return list of Users', async () => {
    const users: Array<User> = [
      {
        id: 1,
        name: 'testuser',
        email: 'test@example.com',
        username: 'test',
        createdAt: new Date(),
        password: 'password',
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'testuser2',
        email: 'test2@example.com',
        username: 'test2',
        createdAt: new Date(),
        password: 'password',
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(prisma.user, 'findMany').mockResolvedValue(users);

    const result = await service.findAll();

    expect(prisma.user.findMany).toHaveBeenCalled();
    result.forEach((user) => {
      expect(user).not.toHaveProperty('password');
    });
  });
});
