'use server';
import { AxiosResponse } from 'axios';
// import { env } from '@/env';
import { cookies } from 'next/headers';
import * as setCookie from 'set-cookie-parser';

type SameSiteStringOptions = 'lax' | 'strict' | 'none';
type SameSite = boolean | undefined | SameSiteStringOptions;

// const key = new TextEncoder().encode(env.JWT_SECRET);

export type SessionData = {
  user: { id: string };
  expires: string;
};

// export async function getSession() {
//   const session = (await cookies()).get('session')?.value;
//   if (!session) return null;
//   return await verifyToken(session);
// }

// export async function setSession(user: User) {
//   const expiresInOneDay = new Date(Date.now() + 24 * 60 * 60 * 1000);
//   const session: SessionData = {
//     user: { id: user.id! },
//     expires: expiresInOneDay.toISOString(),
//   };
//   const encryptedSession = await signToken(session);
//   (await cookies()).set('session', encryptedSession, {
//     expires: expiresInOneDay,
//     httpOnly: true,
//     secure: false,
//     sameSite: 'lax',
//   });
// }

export const getCookieString = async (): Promise<string> => {
  const cookieStore = await cookies();
  let cookieString = '';
  if (cookieStore.getAll().length > 0) {
    cookieString = cookieStore
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');
  }

  return cookieString;
};

export const setSession = async (response: AxiosResponse) => {
  const setCookieHeader =
    response.headers['Set-Cookie'] ?? response.headers['set-cookie'];
  if (setCookieHeader) {
    const splitCookieHeaders = setCookie.splitCookiesString(setCookieHeader);
    const parsedCookies = setCookie.parse(splitCookieHeaders);
    const cookieStore = await cookies();

    parsedCookies.forEach((cookie) =>
      cookieStore.set({
        name: cookie.name,
        value: cookie.value,
        secure: cookie.secure,
        httpOnly: cookie.httpOnly,
        expires: cookie.expires,
        sameSite: cookie.sameSite as SameSite,
        path: cookie.path,
      }),
    );
  }
};
