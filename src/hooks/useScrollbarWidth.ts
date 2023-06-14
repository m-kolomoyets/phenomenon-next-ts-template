import { useEffect, useState } from 'react';
import { scrollbarWidth } from '@xobotyi/scrollbar-width';
import useIsClient from './useIsClient';

/**
 * Hook to get the scrollbar width.
 * @returns The scrollbar width.
 */
export const useScrollbarWidth = (): number => {
    const isClient = useIsClient();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [sbw, setSbw] = useState<number>(scrollbarWidth()!);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const raf = requestAnimationFrame(() => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setSbw(scrollbarWidth()!);
        });

        return () => {
            return cancelAnimationFrame(raf);
        };
    }, [isClient]);

    return sbw;
};
