import {
  BadRequestException,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const response = context.switchToHttp().getResponse<Response>();

    const body = plainToClass(LoginUserDto, request.body);

    const errors = await validate(body);

    const errorMessages = errors.map((x: any) =>
      Object.values(x.constraints).join(', '),
    );

    if (errorMessages.length > 0) {
      throw new BadRequestException({
        message: errorMessages,
      });
    }

    return super.canActivate(context) as boolean | Promise<boolean>;
  }
}
