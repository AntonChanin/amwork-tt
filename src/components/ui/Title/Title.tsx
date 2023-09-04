import { FC, PropsWithChildren } from 'react'

import createClass from '../../../utils/createClass';

import styles from './Title.module.scss';

type Props = {
  value?: string;
  className?: string;
};

const Title: FC<PropsWithChildren<Props>> = ({ value = '', className = '', children }) => (
  <div className={createClass([styles.title, `${className}`, ])}>{children}{value}</div>
);

export default Title;
