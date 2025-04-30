'use client';
import { UserEntity } from '@/lib/api-client';
import React from 'react';

export type UserContextType = {
  user?: UserEntity | null;
};

export const UserContext = React.createContext<UserContextType>({});
export const useUserContext = () => {
  const value = React.useContext(UserContext);
  if (value == null) {
    throw new Error(
      'You must declare "useUserContext" underneath a <UserContext.Provider></UserContext.Provider> tree',
    );
  }

  return value;
};
