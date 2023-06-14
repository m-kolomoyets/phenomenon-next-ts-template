import { useState, useCallback } from 'react';

/**
 * Hook to use localStorage to store and manage value with useState.
 * @param key The key to use in localStorage.
 * @param initialValue The initial value to use.
 * @returns A tuple with the stored value, a function to set the value and a function to get the value.
 */
export const useLocalStorage = (key: string, initialValue: string | null) => {
    const [storedValue, setStoredValue] = useState<string | null>(() => {
        const item = localStorage.getItem(key);

        return item ? item : initialValue;
    });

    const getValue = useCallback(() => {
        const item = localStorage.getItem(key);

        setStoredValue(item);
    }, [key]);

    const setValue = useCallback(
        (value: string | null) => {
            setStoredValue(value);
            typeof value === 'string' ? localStorage.setItem(key, value) : localStorage.removeItem(key);
        },
        [key]
    );

    return [storedValue, setValue, getValue] as const;
};
