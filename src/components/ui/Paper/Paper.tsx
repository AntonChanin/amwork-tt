import { FC, PropsWithChildren } from 'react';

import createClass from '../../../utils/createClass';
import { PaperProps } from '../../../types/ui';

import styles from './Paper.module.scss';

const Paper: FC<PropsWithChildren<Partial<PaperProps>>> = (props) => {
  const {
    className = '',
    children,
  } = props
  return (
    <div className={createClass([styles.paper, `${className}`])}>
      {children}
    </div>
  );
};

export default Paper;
