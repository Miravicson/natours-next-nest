import { Injectable, OnModuleInit } from '@nestjs/common';

import { DatabaseSeed } from './seeder/database.seed';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly databaseSeeder: DatabaseSeed) {}
  async onModuleInit() {
    // await this.databaseSeeder.seedDatabase();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
