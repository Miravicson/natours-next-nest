import { createMock } from '@golevelup/ts-jest';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseSeed } from './seeder/database.seed';

describe('AppController', () => {
  let appController: AppController;
  const configService = new Map<string, string>([['APP_NAME', 'test']]);

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ConfigService, { provide: DatabaseSeed, useValue: createMock<DatabaseSeed>() }],
    })
      .overrideProvider(ConfigService)
      .useValue(configService)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    const appName = 'test';
    const message = `Welcome to ${appName}`;
    it('should return a welcome message"', () => {
      expect(appController.root()).toEqual({ message });
    });
  });
});
