import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, HydratedDocument, Model, Schema } from 'mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = await MongoMemoryServer.create();
      const mongoUri = mongod.getUri();
      return {
        uri: mongoUri,
        ...options,
      };
    },
  });

export const closeInMongodConnection = async () => {
  if (mongod) await mongod.stop();
};

export class ModelMocker {
  mongoConnection: Connection;
  mongod: MongoMemoryServer;

  async beforeAll() {
    this.mongod = await MongoMemoryServer.create();
    this.mongoConnection = (await connect(this.mongod.getUri())).connection;
  }

  async getModel<T>(modelName: string, ModelSchema: Schema) {
    if (!this.mongod || !this.mongoConnection) {
      await this.beforeAll();
    }
    const model = this.mongoConnection.model(modelName, ModelSchema);
    return model as unknown as T;
  }

  async afterAll() {
    await this.mongoConnection.dropDatabase();
    await this.mongoConnection.close();
    await this.mongod.stop();
  }

  async clearCollection(key: string) {
    await this.mongoConnection.collections[key].deleteMany({});
  }

  async afterEach() {
    for (const key in this.mongoConnection.collections) {
      await this.clearCollection(key);
    }
  }
}
