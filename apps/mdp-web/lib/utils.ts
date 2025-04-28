import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getCookieString } from './auth/session';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * This function intercepts the httpOnly cookie returned from authentication and ensures that, during a server-side call, the `apiFunction` will be called with the httpOnly cookies.
 * This function is necessary when making a server call because, unlike on the browser, httpOnly cookies are not automatically forwarded by the server.
 *
 * !DO NOT USE THIS FUNCTION TO DECORATE ANY REQUEST CALLED FROM CLIENT COMPONENT
 * @param apiFunction Orval generated function returned from lib/api-client
 * @returns
 */
export function withAuth<F extends (...args: any[]) => any>(apiFunction: F): F {
  return (async (...args: any[]) => {
    const cookieString = await getCookieString();

    const [firstArg, secondArg, thirdArg] = args;
    const isFirstArgOptions =
      args.length > 0 &&
      !(firstArg instanceof AbortSignal) &&
      typeof firstArg !== 'undefined' &&
      (!firstArg || !('headers' in firstArg));

    const options = isFirstArgOptions ? secondArg : firstArg;
    const mergedOptions = {
      ...options,
      headers: {
        ...(options?.headers || {}),
        Cookie: cookieString,
      },
    };

    return isFirstArgOptions
      ? apiFunction(firstArg, mergedOptions, thirdArg)
      : apiFunction(mergedOptions, secondArg);
  }) as F;
}
