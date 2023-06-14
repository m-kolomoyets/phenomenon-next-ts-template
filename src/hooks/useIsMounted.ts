import { useCallback, useEffect, useRef } from 'react';

/**
 * Hook used to check if the component is mounted.
 * @returns A function that returns a boolean indicating if the component is mounted.
 */
export const useIsMounted = () => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        };
    }, []);

    return useCallback(() => {
        return isMounted.current;
    }, []);
};
