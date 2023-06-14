import { useEffect, useState } from 'react';

export const DEFAULT_DEBOUNCE_DELAY = 300;

/**
 * Hook used to debounce any value passed to it.
 * @param value The value to debounce.
 * @param delay The delay in milliseconds (300 default).
 * @returns The debounced value.
 */
export const useDebounce = <T>(value: T, delay = DEFAULT_DEBOUNCE_DELAY) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);

    return debouncedValue;
};
