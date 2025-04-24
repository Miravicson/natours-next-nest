import { FilterQuery, QueryWithHelpers } from 'mongoose';

type QueryReturnType<T> = QueryWithHelpers<T[], T, T, T>;

export interface QueryStringType {
  sort?: string;
  fields?: string;
  page: number;
  size: number;
  [key: string]: unknown;
}

export type PaginationInfo = {
  totalPages: number;
  currentPage: number;
  totalRecords: number;
  size: number;
};

export type PaginatedResponse<T> = {
  docs: T[];
  paginationInfo: PaginationInfo;
};

export class QueryFeatures<T> {
  private page: number;
  private size: number;

  constructor(private query: QueryReturnType<unknown>, private queryString: QueryStringType) {
    this.page = this.queryString.page * 1 || 1;
    this.size = this.queryString.size * 1 || 10;
  }

  filter() {
    // 1A) Filtering
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'size', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1B) Advanced filtering
    const queryStr = JSON.stringify(queryObj).replace(/\b(gte?|lte?)\b/g, (match) => `$${match}`);
    const advancedQueryObj = JSON.parse(queryStr);
    this.query = this.query.find(advancedQueryObj);
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt -updatedAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select('-__v');
    }
    return this;
  }

  private paginate() {
    const skip = (this.page - 1) * this.size;
    this.query = this.query.skip(skip).limit(this.size);
    return this;
  }

  getQuery(option: { new: boolean } = { new: false }) {
    return option.new ? this.query.clone() : this.query;
  }

  private getPaginationObject(count: number): PaginationInfo {
    const totalPages = Math.ceil(count / this.size);
    const currentPage = this.page;
    const totalRecords = count;

    return { totalPages, currentPage, totalRecords, size: this.size };
  }

  async execute(option?: { lean: FilterQuery<any>['lean'] }): Promise<PaginatedResponse<T>> {
    const queryClone = this.getQuery({ new: true });
    this.paginate();
    const [docs, count] = await Promise.all([
      (async () => {
        return option?.lean ? this.query.lean(option.lean).exec() : this.query.lean().exec();
      })(),
      queryClone.countDocuments(),
    ]);
    const paginationInfo = this.getPaginationObject(count);
    this.query = queryClone;
    return { docs: docs as T[], paginationInfo };
  }
}
