import { useEffect } from 'react';
import useIsClient from './useIsClient';

/**
 * Hook used to set a global custom property for CSS.
 * @param name The name of the custom property.
 * @param value The value of the custom property.
 */
export const useSetGlobalCustomProperty = (name: string, value: string) => {
    const isClient = useIsClient();

    useEffect(() => {
        if (!isClient) {
            return;
        }

        document.documentElement.style.setProperty(name, value);
    }, [isClient, name, value]);
};
