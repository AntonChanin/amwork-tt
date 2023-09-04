import { FC, PropsWithChildren } from 'react';

import createClass from '../../../utils/createClass';
import styles from './Row.module.scss';

const Row: FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({ children, className = '', ...props }) => {
    return <div {...props} className={createClass([className, styles.row])}>{children}</div>
}

export default Row;
