import { defaultShouldDehydrateQuery, isServer, MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { mutationErrorHandler, queryErrorHandler } from '@/utils/auth/errorHandler';

let browserQueryClient: QueryClient | undefined = undefined;

export const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
            },
            mutations: {
                retry: false,
            },
            dehydrate: {
                shouldDehydrateQuery: (query) => {
                    return defaultShouldDehydrateQuery(query) || query.state.status === 'pending';
                },
            },
        },
        queryCache: new QueryCache({
            onError: queryErrorHandler,
        }),
        mutationCache: new MutationCache({
            onError: mutationErrorHandler,
        }),
    });
};

export function getQueryClient() {
    if (isServer) {
        return makeQueryClient();
    }

    if (!browserQueryClient) {
        browserQueryClient = makeQueryClient();
    }

    return browserQueryClient;
}
