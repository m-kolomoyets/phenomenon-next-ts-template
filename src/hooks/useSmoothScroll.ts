import { useEffect } from 'react';
import useIsClient from './useIsClient';

/**
 * Hook used to polyfill smoothscroll.
 */
export const useSmoothScroll = () => {
    const isClient = useIsClient();

    useEffect(() => {
        if (!isClient) {
            return;
        }

        import('smoothscroll-polyfill').then(({ polyfill }) => {
            return polyfill();
        });
    }, [isClient]);
};
