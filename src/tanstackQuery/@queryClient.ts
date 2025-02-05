import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { mutationErrorHandler, queryErrorHandler } from '@/utils/auth/errorHandler';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
        mutations: {
            retry: false,
        },
    },
    queryCache: new QueryCache({
        onError: queryErrorHandler,
    }),
    mutationCache: new MutationCache({
        onError: mutationErrorHandler,
    }),
});
