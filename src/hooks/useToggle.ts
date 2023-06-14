import { useCallback, useState } from 'react';

/**
 * Hook used to toggle a value.
 * @param defaultValue The default value to use.
 * @returns A tuple with the value, a function to toggle the value and a function to set the value.
 */
export const useToggle = (defaultValue?: boolean) => {
    const [value, setValue] = useState(Boolean(defaultValue));

    const toggle = useCallback(() => {
        setValue((prev) => {
            return !prev;
        });
    }, []);

    return [value, toggle, setValue] as const;
};
