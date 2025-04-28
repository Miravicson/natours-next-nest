import { Result } from './definitions';
import { StringValue } from './ms';
export declare function stringToBoolean(item: string | boolean): boolean;
export declare function choice<T>(arr: T[]): T;
export declare const tryCatch: <T, E = Error>(
  arg: Promise<T> | (() => T),
) => Result<T, E> | Promise<Result<T, E>>;
export declare function isObject(object: any): boolean;
export declare const startOfDay: (dateTime: Date) => Date;
export declare const endOfDay: (dateTime: Date) => Date;
export declare const dateFromUnitTime: (time: StringValue) => Date;
export declare const randomPassword: (length?: number) => string;
/**
 *
 * @param token string token to hash
 * @returns string hashed token
 */
export declare function hashToken(token: string): string;
export declare function genTokenAndHash(): {
  token: string;
  hashedToken: string;
};
//# sourceMappingURL=utils.d.ts.map
