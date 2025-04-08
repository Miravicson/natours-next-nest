import * as _ from 'lodash';

export const excludeFrom = (fields: any[], exclude: any[]) => _.difference(fields, exclude);

export function choice<T>(arr: T[]): T {
  if (arr.length === 0) throw new Error('Array cannot be empty');
  return arr[Math.floor(Math.random() * arr.length)] as T;
}