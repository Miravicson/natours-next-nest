import { DateTime } from 'luxon';
import { createHash, randomBytes } from 'node:crypto';
import * as randomString from 'randomstring';
import { Result } from './definitions';
import ms, { StringValue } from './ms';

export function stringToBoolean(item: string | boolean) {
  if (typeof item === 'boolean') return item;
  return ['1', 'true'].includes(item);
}

export function choice<T>(arr: T[]): T {
  if (arr.length === 0) throw new Error('Array cannot be empty');
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

export const tryCatch = <T, E = Error>(
  arg: Promise<T> | (() => T),
): Result<T, E> | Promise<Result<T, E>> => {
  if (typeof arg === 'function') {
    try {
      const data = (arg as () => T)();
      return { data, error: null };
    } catch (error) {
      return { data: null, error: error as E };
    }
  }

  return (arg as Promise<T>)
    .then((data) => ({ data, error: null }))
    .catch((error) => ({ data: null, error: error as E }));
};

export function isObject(object: any) {
  if (!object) return false;
  return typeof object === 'object' && !Array.isArray(object);
}

export const startOfDay = (dateTime: Date): Date => {
  return DateTime.fromJSDate(dateTime).startOf('day').toJSDate();
};

export const endOfDay = (dateTime: Date): Date => {
  return DateTime.fromJSDate(dateTime).endOf('day').toJSDate();
};

export const dateFromUnitTime = (time: StringValue) => {
  const secondsFromTimeString = ms(time);
  return DateTime.now()
    .plus({ milliseconds: secondsFromTimeString })
    .toJSDate();
};

export const randomPassword = (length = 8) => {
  return randomString.generate({
    length,
    charset: ['alphanumeric', '-'],
  });
};

/**
 *
 * @param token string token to hash
 * @returns string hashed token
 */
export function hashToken(token: string) {
  return createHash('sha256').update(token).digest('hex');
}

export function genTokenAndHash(): { token: string; hashedToken: string } {
  const token = randomBytes(32).toString('hex') + randomPassword();
  const hashedToken = hashToken(token);
  return { token, hashedToken };
}
