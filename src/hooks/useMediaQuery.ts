import { useState, useEffect } from 'react';
import useIsClient from './useIsClient';

/**
 * Hook to use media queries inside Component JSX.
 * @param query The media query to use.
 * @param defaultValue The default value to use.
 * @returns A boolean indicating if the media query matches.
 */
export const useMediaQuery = (query: string, defaultValue = false) => {
    const isClient = useIsClient();
    const [matches, setMatches] = useState(defaultValue);

    useEffect(() => {
        if (!isClient) {
            return;
        }

        const media = window.matchMedia(query);

        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        media.addEventListener('change', listener);

        return () => {
            media.removeEventListener('change', listener);
        };
    }, [isClient, matches, query]);

    return matches;
};
