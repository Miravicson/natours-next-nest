import { createMock } from '@golevelup/ts-jest';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  const configService = { get: jest.fn() };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, { provide: ConfigService, useValue: configService }],
    })
      .useMocker(createMock)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const appName = 'Test';
    configService.get.mockReturnValueOnce(appName);

    const message = `Welcome to ${appName}`;
    it('should return a welcome message"', () => {
      expect(appController.root()).toEqual({ message });
    });
  });
});
