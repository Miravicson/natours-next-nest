import { HttpStatus, Logger, NotFoundException } from '@nestjs/common';
import * as _ from 'lodash';
import { Connection, FilterQuery, Model, PopulateOptions, UpdateQuery } from 'mongoose';

import { OperationalException } from '../exception-filters/OperationalException';
import { AbstractDocument } from './mongoose-schemas/abstract.schema';
import { PaginatedResponse, QueryFeatures, QueryStringType } from './query-features';

type GetOptions = {
  withPassword?: boolean;
  disableMiddleware?: boolean;
  select?: string;
  populateOptions?: PopulateOptions | (string | PopulateOptions)[];
};

export abstract class AbstractRepository<
  TDocument extends AbstractDocument,
  K extends AbstractDocument = AbstractDocument,
> {
  protected abstract readonly logger: Logger;

  constructor(protected readonly model: Model<TDocument>, private readonly connection?: Connection) {}

  getResourceName() {
    return this.model.modelName.toLowerCase();
  }

  get resourceName() {
    return this.model.modelName.toLowerCase();
  }

  async createOne<T>(data: T): Promise<TDocument> {
    const newDoc = await this.model.create(data);
    return newDoc;
  }

  async getOne(id: string): Promise<TDocument>;
  async getOne(filter: FilterQuery<TDocument>): Promise<TDocument>;
  async getOne(docOrId: K | string): Promise<TDocument>;
  async getOne(docOrIdOrFilter: K | string | FilterQuery<TDocument>, getOptions: GetOptions): Promise<TDocument>;
  async getOne(
    docOrIdOrFilter: K | string | FilterQuery<TDocument>,
    getOptions: GetOptions = {} as GetOptions,
  ): Promise<TDocument> {
    const resource: string = this.getResourceName();
    if (_.isEmpty(getOptions) && docOrIdOrFilter instanceof Model) {
      this.logger.verbose(`Finding user with user Instance`);
      return docOrIdOrFilter as TDocument;
    }

    let docQuery;

    if (typeof docOrIdOrFilter === 'string') {
      this.logger.verbose(`Finding user with userId`);
      docQuery = this.model.findById(docOrIdOrFilter);
    } else if (docOrIdOrFilter instanceof Model) {
      docQuery = this.model.findById((docOrIdOrFilter as K)._id);
    } else {
      this.logger.verbose(`Finding user with filter query`);
      docQuery = this.model.findOne(docOrIdOrFilter);
    }

    if (getOptions.withPassword) {
      docQuery = docQuery.select('+password');
    }

    if (getOptions.select) {
      docQuery = docQuery.select(getOptions.select);
    }

    if (getOptions.populateOptions && Object.keys(getOptions.populateOptions).length) {
      docQuery = docQuery.populate(getOptions.populateOptions);
    }
    docQuery.setOptions(getOptions);
    const document = await docQuery.exec();
    if (!document) {
      throw new OperationalException(`${resource} not found`, HttpStatus.NOT_FOUND);
    }
    return document as TDocument;
  }

  async getAll(
    queryString: QueryStringType = {
      size: 10,
      page: 1,
    },
    filter?: FilterQuery<TDocument>,
  ): Promise<PaginatedResponse<TDocument>> {
    const result = await new QueryFeatures<TDocument>(this.model.find(filter || {}), queryString)
      .filter()
      .sort()
      .limitFields()
      .execute({ lean: { virtuals: true } });

    return result;
  }
  async findOneAndUpdate(filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument>) {
    const document = await this.model.findOneAndUpdate(filterQuery, update, {
      lean: true,
      new: true,
    });

    if (!document) {
      throw new OperationalException(`${this.resourceName} not found`, HttpStatus.NOT_FOUND);
    }
    return document;
  }

  async upsert(filterQuery: FilterQuery<TDocument>, document: Partial<TDocument>) {
    return this.model.findOneAndUpdate(filterQuery, document, {
      lean: true,
      upsert: true,
      new: true,
    });
  }

  async find(filterQuery: FilterQuery<TDocument>) {
    return this.model.find(filterQuery, {}, { lean: true });
  }

  async beginTransaction() {
    if (this.connection) {
      const session = await this.connection.startSession();
      session.startTransaction();
      // return session;
    }
  }
}
