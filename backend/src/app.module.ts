import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
