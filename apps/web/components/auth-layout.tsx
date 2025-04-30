import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { useAuth } from '@/lib/auth-provider-hooks';

function AuthLayout({ children }: PropsWithChildren) {
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  return <>{children}</>;
}

export default AuthLayout;
