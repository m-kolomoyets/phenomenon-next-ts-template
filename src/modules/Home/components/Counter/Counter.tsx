'use client';

import { memo, useCallback, useState } from 'react';
import clsx from 'clsx';
import s from './Counter.module.css';

const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => {
            return prev + 1;
        });
    }, []);

    const decrement = useCallback(() => {
        setCount((prev) => {
            return prev - 1;
        });
    }, []);

    return (
        <article className={s.wrap}>
            <div className={s['counter-wrap']}>
                Count:&nbsp;<strong>{count}</strong>
            </div>
            <footer className={s.footer}>
                <button className={clsx(s.cta, 'focus-primary')} onClick={decrement}>
                    -
                </button>
                <button className={clsx(s.cta, 'focus-primary')} onClick={increment}>
                    +
                </button>
            </footer>
        </article>
    );
};

export default memo(Counter);
