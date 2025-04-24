import { HttpStatus } from '@nestjs/common';

export interface CustomException extends Error {
  name: string;
  code?: number;
  statusCode?: number;
  status?: 'failure' | 'error';
  message: string;
  isOperational?: boolean;
  error?: CustomException;
}

export class OperationalException extends Error implements Omit<CustomException, 'code' | 'error'> {
  statusCode: number;
  status: 'failure' | 'error';
  isOperational = true;
  constructor(message: string, statusCode = HttpStatus.INTERNAL_SERVER_ERROR) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'failure' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}
