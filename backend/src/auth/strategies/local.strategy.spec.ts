import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { AuthService } from '../auth.service';
import { LocalStrategy } from './local.strategy';
import { User } from 'src/users/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';

describe('LocalStrategy', () => {
  let localStrategy: LocalStrategy;
  let service: DeepMockProxy<AuthService>;

  beforeEach(() => {
    service = mockDeep<AuthService>();
    // FIXME: Creo que acá se puede usar el testingModule para usar el suite de pruebas de NestJS
    localStrategy = new LocalStrategy(service);
  });

  it('validate method should return an user object', async () => {
    const validatedUser: User = {
      createdAt: new Date(),
      email: 'test@example.com',
      id: 1,
      name: 'Test User',
      password: 'password',
      updatedAt: new Date(),
      username: 'testuser',
    };

    jest.spyOn(service, 'validateUser').mockResolvedValue(validatedUser);

    const result = await localStrategy.validate('test@example.com', 'password');

    expect(service.validateUser).toHaveBeenCalled();
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('email');
    expect(result).toHaveProperty('username');
    expect(result).toHaveProperty('name');
    expect(result).not.toHaveProperty('password');
    expect(result).not.toHaveProperty('createdAt');
    expect(result).not.toHaveProperty('updatedAt');
  });

  it('validate should throw UnauthorizedExpection on invalid user', async () => {
    jest.spyOn(service, 'validateUser').mockResolvedValue(null);

    try {
      await localStrategy.validate('test@example.com', 'password');
    } catch (e) {
      expect(e).toBeInstanceOf(UnauthorizedException);
    }
  });
});
