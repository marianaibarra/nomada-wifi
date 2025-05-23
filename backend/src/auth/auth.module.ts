import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.stategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: 'this-is-a-super-secret-key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AuthModule {}
