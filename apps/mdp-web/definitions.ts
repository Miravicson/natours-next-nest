import { z } from 'zod';

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_TEAM = 'CREATE_TEAM',
  REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
  INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
}

export type Success<T> = {
  data: T;
  error: null;
};

export type Failure<E> = {
  data: null;
  error: E;
};

export type Result<T, E = Error> = Success<T> | Failure<E>;

export interface TrpcContext {
  userId?: string;
}

export interface HandlerParamsWithoutInput {
  ctx: TrpcContext;
  signal?: AbortSignal;
}

export interface HandlerParams<TSchema extends z.ZodTypeAny>
  extends HandlerParamsWithoutInput {
  input: z.infer<TSchema>;
}

export interface HasClassNameProps {
  className?: string;
}

export type Constructor<T> = new (data: Partial<T>) => T;
export type NestedEntities<T> = Partial<Record<keyof T, Constructor<unknown>>>;

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  };
}
