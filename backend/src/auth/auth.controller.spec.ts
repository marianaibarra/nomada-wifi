import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { mockDeep } from 'jest-mock-extended';
import { User } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

describe('AuthController', () => {
  let controller: AuthController;
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    })
      .overrideProvider(AuthService)
      .useValue(mockDeep<AuthService>())
      .compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  it('expect service login to be called and return an access token', () => {
    const fakeUser: User = {
      id: 1,
      email: 'this@example.com',
      name: 'John Doe',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date(),
      username: 'john_doe',
    };

    const result = controller.login({
      user: fakeUser,
    });

    expect(service.login).toHaveBeenCalledWith(fakeUser);
  });

  it('expect register service to be called', async () => {
    const createUser: CreateUserDto = {
      email: 'this@example.com',
      name: 'John Doe',
      password: 'password',
      username: 'john_doe',
    };

    await controller.register(createUser);

    expect(service.register).toHaveBeenCalledWith(createUser);
  });
});
