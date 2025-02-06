'use client';

import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from '@/tanstackQuery/@queryClient';

const QueryClientProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const queryClient = getQueryClient();

    return <TanstackQueryClientProvider client={queryClient}>{children}</TanstackQueryClientProvider>;
};

export default QueryClientProvider;
