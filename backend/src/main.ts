import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';

  // Configs para development.
  app.use(
    helmet({
      contentSecurityPolicy: false,
      hsts: false,
    }),
  );

  // Config para usar class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: frontendUrl,
    methods: ['GET', 'PATCH', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Nomada WiFi')
    .setVersion('1.0')
    .setDescription('API para Nomada WiFi')
    .addTag('auth', 'Auth del usuario, incluyendo registro y login')
    .addTag('users', 'Los usuarios en la aplicación')
    .build();

  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
