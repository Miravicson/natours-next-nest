import { Controller, Get, Render } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppService } from './app.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  @Render('index')
  root() {
    const appName = this.configService.get<string>('APP_NAME');
    const message = `Welcome to ${appName}`;
    return { message };
  }

  @Get('health')
  @ApiOkResponse({})
  health() {
    return {
      message: 'OK',
    };
  }
}
