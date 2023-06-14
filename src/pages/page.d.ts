import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};
