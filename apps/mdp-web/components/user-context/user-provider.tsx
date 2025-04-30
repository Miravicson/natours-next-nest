'use client';
import { UserEntity } from '@/lib/api-client';
import { PropsWithChildren, useMemo } from 'react';
import { UserContext, UserContextType } from './user-context';

export function UserProvider({
  userEntity,
  children,
}: PropsWithChildren<{ userEntity?: UserEntity | null }>) {
  const userContextValue: UserContextType = useMemo(
    () => ({
      user: userEntity,
    }),
    [userEntity],
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
