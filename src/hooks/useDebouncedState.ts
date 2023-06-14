import { useState, useEffect } from 'react';
import { useDebounce, DEFAULT_DEBOUNCE_DELAY } from '@/hooks/useDebounce';

/**
 * Hook used to create useState state and debounce its value passed to it.
 * @param initialValue The initial value of the state.
 * @param delay The delay in milliseconds (300 default).
 * @returns The state, the debounced value and the setState function.
 */
export const useDebouncedState = <T>(initialValue: T, delay = DEFAULT_DEBOUNCE_DELAY) => {
    const [value, setValue] = useState(initialValue);
    const debouncedValue = useDebounce(value, delay);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    return [value, debouncedValue, setValue] as const;
};
