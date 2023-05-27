import { ArgumentsHost, Catch, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BaseExceptionFilter } from '@nestjs/core';
import { Request, Response } from 'express';
import { EnvironmentVariables } from 'src/common/config/env.validation';

import { DEFAULT_500_ERROR_MESSAGE } from './error-messages';
import { CustomException, OperationalException } from './OperationalException';

export type GenericException = HttpException | CustomException;

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private logger = new Logger('AllExceptionsFilter');

  constructor(private configService: ConfigService<EnvironmentVariables>) {
    super();
  }

  private handleDuplicateKeyException(error: any) {
    const catchTextInQuoteRegex = /(["'])(\\?.)*?\1/;
    const match = error.errmsg.match(catchTextInQuoteRegex);
    const value = match && Array.isArray(match) ? match[0] : match;
    const message = `Duplicate field value: ${value}. Please use another value!`;
    return new OperationalException(message, HttpStatus.CONFLICT);
  }

  private handleCastException(error: any) {
    const message = `Invalid ${error.path}: ${error.value}.`;
    return new OperationalException(message, HttpStatus.BAD_REQUEST);
  }

  private handleDBValidationException(error: any) {
    const errorMessages = Object.values(error.errors).map((el: any) => el.message);
    const message = `Invalid input data. ${errorMessages.join('. ')}`;
    return new OperationalException(message, HttpStatus.BAD_REQUEST);
  }

  private handleJWTException() {
    const message = `Invalid authentication token. Please log in again`;
    return new OperationalException(message, HttpStatus.UNAUTHORIZED);
  }

  private handleJWTExpiredException() {
    const message = `Your authentication token has expired. Please log in again`;
    return new OperationalException(message, HttpStatus.UNAUTHORIZED);
  }

  private handleProductionError(customException: CustomException, req: Request, res: Response) {
    if (customException?.code === 11000) {
      customException = this.handleDuplicateKeyException(customException);
    }
    if (customException.name === 'CastError') customException = this.handleCastException(customException);
    if (customException.name === 'JsonWebTokenError') customException = this.handleJWTException();
    if (customException.name === 'TokenExpiredError') customException = this.handleJWTExpiredException();

    if (req.originalUrl.startsWith('/api')) {
      if (customException.isOperational) {
        return res.status(customException.statusCode || 500).json({
          status: customException.status,
          message: customException.message || DEFAULT_500_ERROR_MESSAGE,
        });
      }

      this.logger.error(customException.message, customException);

      // Prevent leaking out details of non operational errors.
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        message: DEFAULT_500_ERROR_MESSAGE,
      });
    }
  }

  private handleDevelopmentError(exception: CustomException, req: Request, res: Response) {
    if (req.originalUrl.startsWith('/api')) {
      return res.status(exception.statusCode || 500).json({
        status: exception.status,
        message: exception.message || DEFAULT_500_ERROR_MESSAGE,
        stack: exception.stack,
        error: exception,
      });
    }

    // implement logic to handle error for static urls.
  }

  catch(exception: GenericException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof HttpException) {
      return super.catch(exception, host);
    }

    exception.statusCode = exception.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    exception.status = exception.status || 'error';
    exception.message = exception.message || DEFAULT_500_ERROR_MESSAGE;
    const customException: CustomException = Object.create(exception);

    if (this.configService.get('isProduction', { infer: true })) {
      this.handleProductionError(customException, request, response);
    } else {
      this.handleDevelopmentError(customException, request, response);
    }
  }
}
