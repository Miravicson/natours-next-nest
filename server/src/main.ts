import { Logger, RequestMethod, ValidationPipe, VERSION_NEUTRAL, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';
import { join } from 'path';

import { AppModule } from './app.module';
import { applySecurityMiddleware } from './common/middleware/security.middleware';

async function bootstrap() {
  const logger = new Logger('Bootstrap Function');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  const expressApp = app.get(HttpAdapterHost).httpAdapter.getInstance();
  expressApp.set('trust proxy', 1);

  app.enableCors();

  applySecurityMiddleware(app);

  app.use(cookieParser());

  app.setGlobalPrefix('api', {
    exclude: [{ path: '', method: RequestMethod.ALL }, 'test-jwt', 'ip'],
  });

  // configure static pages
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });

  // Enable validation with class validators
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  // enable DI for class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const PORT = configService.get<number>('PORT') as number;
  const APP_NAME = configService.get<string>('APP_NAME') as string;
  await app.listen(PORT);

  logger.log(`Starting ${APP_NAME} Service on port ${PORT}.`);
}
bootstrap();
