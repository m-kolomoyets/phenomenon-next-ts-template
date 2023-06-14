import { useRef, useCallback, useEffect } from 'react';
import { LOCK_SCROLL_Y_CLASS_NAME } from '@/constants';
import useIsClient from './useIsClient';

/**
 * Hook to lock the scroll of the document when needed.
 * @returns The object containing the functions to
 * - lock
 * -  unlock the scroll of the document
 * - the function to check if the scroll of the document is locked.
 */
const useDocumentLockScrollY = () => {
    const documentRef = useRef<HTMLElement | null>(null);
    const scrollTopRef = useRef<number>(0);
    const isSupportScrollBehaviorBlockCssRef = useRef<boolean>(true);
    const isClient = useIsClient();

    useEffect(() => {
        if (!isClient) {
            return;
        }

        documentRef.current = document.documentElement;
        isSupportScrollBehaviorBlockCssRef.current = CSS.supports('overscroll-behavior-block', 'contain');
    }, [isClient]);

    const lockDocumentScrollY = useCallback(() => {
        const $html = documentRef.current;

        if (isSupportScrollBehaviorBlockCssRef.current || !$html) {
            return;
        }

        scrollTopRef.current = $html.scrollTop ? $html.scrollTop : document.body.scrollTop;

        requestAnimationFrame(() => {
            $html.style.top = `${-scrollTopRef.current}px`;
            $html.classList.add(LOCK_SCROLL_Y_CLASS_NAME);
        });
    }, []);

    const unlockDocumentScrollY = useCallback(() => {
        const $html = documentRef.current;

        if (isSupportScrollBehaviorBlockCssRef.current || !$html) {
            return;
        }

        const scrollTop = parseInt(scrollTopRef.current.toString());

        requestAnimationFrame(() => {
            $html.classList.remove(LOCK_SCROLL_Y_CLASS_NAME);
            $html.style.removeProperty('top');
            $html.scrollTop = scrollTop;
            document.body.scrollTop = scrollTop;
        });
    }, []);

    const checkIsLockDocumentScrollY = useCallback(() => {
        const $html = documentRef.current;

        if (isSupportScrollBehaviorBlockCssRef.current || !$html) {
            return false;
        }

        const isLockingScrollY = $html.classList.contains(LOCK_SCROLL_Y_CLASS_NAME);

        return isLockingScrollY;
    }, []);

    return { lockDocumentScrollY, unlockDocumentScrollY, checkIsLockDocumentScrollY };
};

export default useDocumentLockScrollY;
