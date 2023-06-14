import { useEffect } from 'react';
import useIsClient from './useIsClient';

/**
 * Hook used to remove the initial styles added to the document.
 */
export const useRemoveInitialStyles = () => {
    const isClient = useIsClient();

    useEffect(() => {
        if (!isClient) {
            return;
        }

        document.getElementById('initial-styles')?.remove();
    }, [isClient]);
};
