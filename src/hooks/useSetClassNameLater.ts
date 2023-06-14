import { useEffect, useState } from 'react';
import useIsClient from './useIsClient';

/**
 * Hook to set class name after loop tick completed.
 * @param className  The class name to set.
 * @param canSet The flag to check if can set the class name.
 * @returns  The class name to set.
 */
const useSetClassNameLater = (className: string, canSet: boolean) => {
    const isClient = useIsClient();
    const [newClassName, setNewClassName] = useState<string>('');

    useEffect(() => {
        if (!isClient) {
            return;
        }
        if (!canSet) {
            setNewClassName('');

            return;
        }

        const timeoutId = setTimeout(() => {
            setNewClassName(className);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [className, canSet, isClient]);

    return newClassName;
};

export default useSetClassNameLater;
