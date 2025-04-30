import {
  QueryCache,
  QueryClient,
  QueryClientProvider as ReactQueryQueryClientProvider,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import toast from 'react-hot-toast';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`);
        console.log('ONERR', error);
      }
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 10 * (1000 * 60),
      gcTime: 15 * (1000 * 60),
      throwOnError: false,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      retryOnMount: true,
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});

export function QueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <ReactQueryQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools client={queryClient} buttonPosition="bottom-right" />
    </ReactQueryQueryClientProvider>
  );
}
