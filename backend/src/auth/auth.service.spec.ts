import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { hashPassword, verifyPassword } from 'src/utils/encript-passwords.util';

describe('AuthService', () => {
  let service: AuthService;
  let prisma: DeepMockProxy<PrismaClient>;
  let jwtMock: JwtService;

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
});
