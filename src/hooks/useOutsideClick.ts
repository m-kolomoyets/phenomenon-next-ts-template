import { useEffect, useRef } from 'react';

/**
 * Hook to detect clicks outside a given element.
 * @param callback The callback to call when a click outside the element is detected.
 * @returns A ref to pass to the element to detect clicks outside it.
 */
export const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback]);

    return ref;
};
