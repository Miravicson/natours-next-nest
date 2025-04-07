import {
  ClassSerializerInterceptor,
  Logger,
  RequestMethod,
  ValidationPipe,
  VERSION_NEUTRAL,
  VersioningType,
} from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { WsAdapter } from '@nestjs/platform-ws';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import hpp from 'hpp';
import { join } from 'path';

import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import { SecurityConfig } from './config/security.config';
import { SwaggerConfig } from './config/swagger.config';
import { Plug } from './definitions';

export const securityPlug: Plug = (app) => {
  const securityConfig = app.get(SecurityConfig);

  const helmetConfig = {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
    },
  };

  const corsOptions: CorsOptions = {
    origin: securityConfig.corsOrigins.split(','),
    credentials: securityConfig.allowSecurityCredentials,
  };

  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(helmet.contentSecurityPolicy(helmetConfig));
  app.enableCors(corsOptions);
  // app.use(mongoSanitize()); ❌
  // app.use(xssClean()); ❌
  //Prevent parameter pollution. when there are duplicate query parameters the last one wins.
  app.use(
    hpp({
      whitelist: [],
    }),
  );

  return app;
};

export const nestGlobalProvidersPlug: Plug = (app) => {
  const swaggerConfig = app.get(SwaggerConfig);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  app.setGlobalPrefix('api', {
    exclude: [{ path: '', method: RequestMethod.ALL }, 'test-jwt', 'ip', swaggerConfig.path],
  });
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: VERSION_NEUTRAL,
  });
  // enable DI for class-validator
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  return app;
};

export const swaggerPlug: Plug = (app) => {
  const swaggerConfig = app.get(SwaggerConfig);
  const config = new DocumentBuilder()
    .setTitle(swaggerConfig.title)
    .setDescription(swaggerConfig.description)
    .setVersion(swaggerConfig.version)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory(_controllerKey, methodKey) {
      return methodKey;
    },
  });

  SwaggerModule.setup(swaggerConfig.path, app, document, {
    jsonDocumentUrl: 'swagger/json',
    yamlDocumentUrl: 'swagger/yaml',
    explorer: false,
    customCss: /*css*/ `
    .swagger-ui .opblock .opblock-summary-operation-id {
      font-size: 14px;
      color: rebeccapurple;
      line-break: normal;
      white-space: nowrap;
      margin-right: 10px;
    }
  `,
    customfavIcon: swaggerConfig.favicon,
    swaggerOptions: {
      displayOperationId: true,
      persistAuthorization: true,
    },
  });

  return app;
};

export const staticPagePlug: Plug = (app) => {
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');
  return app;
};

export function configureApp(app: NestExpressApplication, plugs: Plug[]): NestExpressApplication {
  if (!plugs.length) return app;

  return plugs.reduce<NestExpressApplication>((acc, plug) => {
    const result = plug(acc);
    if (!result) {
      throw new Error('Plug function did not return a valid INestApplication');
    }

    return result;
  }, app);
}

export const startAppPlug = async ( plugs: Plug[], app?: NestExpressApplication) => {

  const normalizedApp: NestExpressApplication = !!app ? app : await NestFactory.create<NestExpressApplication>(AppModule);

  const logger = new Logger('Bootstrap');
  const appConfig = normalizedApp.get(AppConfig);
  const swaggerConfig = normalizedApp.get(SwaggerConfig);


  configureApp(normalizedApp, plugs)
  await normalizedApp.listen(appConfig.port, appConfig.hostname);
  const appUrl = (await normalizedApp.getUrl()).replace('[::1]', 'localhost').replace('127.0.0.1', 'localhost');
  logger.log(`Starting Service on ${appUrl} ✅`);
  logger.log(`Documentation is found at ${appUrl}/${swaggerConfig.path} 📜`);

  return normalizedApp;
};

export const webSocketsPlug: Plug = (app) => {
  app.useWebSocketAdapter(new WsAdapter(app));
  const expressApp = app.get(HttpAdapterHost).httpAdapter.getInstance();
  expressApp.set('trust proxy', 1);
  return app;
};
