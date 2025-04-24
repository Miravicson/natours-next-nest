import { createContext, useContext } from 'react';

// import { UserRole } from '@/_generated';
import { UseAuthUserReturnType } from './auth-provider';

export const AuthContext = createContext<UseAuthUserReturnType | null>(null);

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth has to be used within <AuthProvider></AuthProvider>');
  }

  return authContext;
}
