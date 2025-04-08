
import {
  nestGlobalProvidersPlug,
  securityPlug,
  startAppPlug,
  staticPagePlug,
  swaggerPlug,
  webSocketsPlug,
} from './plugs';

async function bootstrap() {
  await startAppPlug([webSocketsPlug, nestGlobalProvidersPlug, securityPlug, swaggerPlug, staticPagePlug]);
}
bootstrap();
