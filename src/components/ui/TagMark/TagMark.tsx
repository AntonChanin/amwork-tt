import { FC, PropsWithChildren } from 'react';

import createClass from '../../../utils/createClass';
import { TagMarkProps } from '../../../types/ui';

import styles from './TagMark.module.scss';

const TagMark: FC<PropsWithChildren<Partial<TagMarkProps>>> = (props) => {
  const {
    value = '',
    className = '',
    variant = 'primary',
    children,
  } = props;

  return (
    <div className={createClass([styles.tagWrapper])}>
      <div className={createClass([styles.tagMark, styles[variant], `${className}`])}>
          {value}{children}
        </div>
        {variant === 'secondary' && <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
        <path d="M0 0H2.0775C3.29264 0 4.44189 0.552359 5.20098 1.50122L10.001 7.50122C11.1697 8.96209 11.1697 11.0379 10.001 12.4988L5.20098 18.4988C4.44189 19.4476 3.29264 20 2.0775 20H0V0Z" fill="#EBEEF6"/>
        </svg>}
    </div>
  );
}

export default TagMark;
