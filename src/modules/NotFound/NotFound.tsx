import { memo } from 'react';
import s from './NotFound.module.css';

const NotFound: React.FC = () => {
    return <h1 className={s.wrap}>404 - Page Not Found</h1>;
};

export default memo(NotFound);
