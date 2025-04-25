import { useRouter } from 'next/router';
import { ReactNode, useCallback, useMemo } from 'react';

import { LoginDto, useLogin, UserEntity } from './api-client/_generated';
import { AuthContext } from './auth-provider-hooks';
import { LocalStorage, useUserFromLocalStorage } from './local-storage';

type AuthProviderProps = {
  children: ReactNode;
};
export type UseAuthUserReturnType = {
  user: UserEntity | null;
  // logout: () => void;
  login: (_data: LoginDto) => void;
  loading: boolean;
  isLoggingIn: boolean;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const user = useUserFromLocalStorage();
  const { isPending: isLoggingIn, mutate: loginMutation } = useLogin();

  const login = useCallback(
    (data: LoginDto) => {
      loginMutation(
        { data },
        {
          onSuccess(data, _variables, _context) {
            LocalStorage.setAuthUser(data.data);
            router.push('/dashboard');
          },
        },
      );
    },
    [loginMutation, router],
  );

  const contextValue: UseAuthUserReturnType = useMemo(
    () => ({
      user,
      login,
      loading: isLoggingIn,
      isLoggingIn,
    }),
    [user, login, isLoggingIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
