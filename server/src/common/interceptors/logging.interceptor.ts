import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(this.constructor.name);

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    if (context.getType() === 'http') {
      return this.logHttpCall(context, next);
    } else if (context.getType() === 'ws') {
      console.log('Hey hey');
      return this.logWsCall(context, next);
    }

    return next.handle();
  }

  private logWsCall(context: ExecutionContext, next: CallHandler) {
    const requestClient = context.switchToWs().getClient();
    const requestData = context.switchToWs().getData();
    const correlationKey = uuidv4();

    this.logger.log(`[${correlationKey}] ${context.getClass().name} ${context.getHandler().name}`);

    return next.handle().pipe(
      tap(() => {
        //
        this.logger.log(`Web socket connection`);
      }),
    );
  }

  private logHttpCall(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const userAgent = request.get('user-agent') || '';
    const { ip, method, path: url } = request;
    const correlationKey = uuidv4();
    const userId = request.user?.userId;

    this.logger.log(
      `[${correlationKey}] ${method} ${url} ${userId ? ' ' + userId : ''} ${userAgent} ${ip}: ${
        context.getClass().name
      } ${context.getHandler().name}`,
    );

    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const response = context.switchToHttp().getResponse();
        const { statusCode } = response;
        const contentLength = response.get('content-length');

        this.logger.log(
          `[${correlationKey}] ${method} ${url} ${statusCode}${contentLength ? ' ' + contentLength : ''} ${
            Date.now() - now
          }ms`,
        );
      }),
    );
  }
}
