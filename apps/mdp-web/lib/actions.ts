'use server';
import { ActivityType } from '@/definitions';
import { login, signup, SignupDto } from '@/lib/api-client';
import { validatedAction } from '@/lib/auth/middleware';
import { setSession } from '@/lib/auth/session';
import { tryCatch } from '@repo/utils';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getProfile, logActivity, logOut } from './server-queries';

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});

export const signInAction = validatedAction(
  signInSchema,
  async (data, _formData) => {
    const { email, password } = data;
    const result = await tryCatch(login({ email, password }));
    if (result.error) {
      return {
        error: 'Invalid email or password. Please try again.',
        email,
        password,
      };
    }

    const { data: userEntity, response } = result.data;
    await Promise.all([
      setSession(response),
      logActivity({
        userId: userEntity.id,
        action: ActivityType.SIGN_IN,
      }),
    ]);

    redirect('/dashboard');
  },
);

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpAction = validatedAction(
  signUpSchema,
  async (data, _formData) => {
    const { email, password } = data;
    const dto: SignupDto = {};
    const result = await tryCatch(signup(dto));

    if (result.error) {
      return {
        error: 'Failed to create user. Please try again.',
        email,
        password,
      };
    }

    const { data: userEntity, response } = result.data;

    await Promise.all([
      logActivity({ userId: userEntity.id, action: ActivityType.SIGN_UP }),
      setSession(response),
    ]);
    redirect('/dashboard');
  },
);

export async function signOut() {
  const { data: userEntity } = await getProfile();
  const { data, error } = await tryCatch(logOut);

  if (!error) {
    await Promise.all([
      setSession((await data).response),
      logActivity({ userId: userEntity.id, action: ActivityType.SIGN_OUT }),
    ]);
  }
  (await cookies()).delete('jwt');
  (await cookies()).delete('jwt-token');
  (await cookies()).delete('refresh-token');
  redirect('/');
}
