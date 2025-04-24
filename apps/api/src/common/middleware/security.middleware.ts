import { INestApplication } from '@nestjs/common';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import hpp from 'hpp';
import xssClean from 'xss-clean';

export function applySecurityMiddleware(app: INestApplication): void {
  // Set security HTTP headers

  const helmetConfig = {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
    },
  };

  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(helmet.contentSecurityPolicy(helmetConfig));
  // Data sanitization against NoSQL query injection
  app.use(mongoSanitize());
  // Data sanitization against XSS
  app.use(xssClean());

  //Prevent parameter pollution. when there are duplicate query parameters the last one wins.
  app.use(
    hpp({
      whitelist: [],
    }),
  );
}
