import { MongoMemoryServer } from 'mongodb-memory-server';
import { connect, Connection, HydratedDocument, Model, Schema } from 'mongoose';

import { AbstractDocument } from '@/common/db/mongoose-schemas/abstract.schema';

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
