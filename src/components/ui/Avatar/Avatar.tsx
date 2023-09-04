import { FC, PropsWithChildren } from 'react';

import createClass from '../../../utils/createClass';

import styles from './Avatar.module.scss';

const Avatar: FC<PropsWithChildren<{ src: string } & React.HTMLAttributes<HTMLDivElement>>> = (props) => {
  const { children, src, className = '', ...other } = props;

  return (
    <div {...other} className={createClass([className, styles.avatarWrapper])}>{children}
      <img className={createClass([styles.avatarImg])} src={src} alt="avatar" />
    </div>
  );
};

export default Avatar;
