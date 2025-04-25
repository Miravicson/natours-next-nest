type ResponseStatus = 'success' | 'failure';
import { Type, applyDecorators } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

export class ResultMeta<S extends ResponseStatus> {
  status: S;
  message: string;
}

export class PaginationResultMeta {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: number | null;
  next: number | null;
}

export class SuccessResponse<T> {
  data: T;
  meta: ResultMeta<'success'>;
}

export class FailureResponse<T> {
  data: null;
  meta: ResultMeta<'failure'>;
}

export class PaginatedResponse<T> {
  data: T[];
  meta: PaginationResultMeta;
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(model, PaginationResultMeta),
    ApiOkResponse({
      schema: {
        title: `PaginatedResponseOf${model.name}`,
        type: 'object',
        required: ['data', 'meta'],
        properties: {
          data: {
            type: 'array',
            items: { $ref: getSchemaPath(model) },
            nullable: false,
          },
          meta: {
            $ref: getSchemaPath(PaginationResultMeta),
            nullable: false,
          },
        },
      },
    }),
  );
};
