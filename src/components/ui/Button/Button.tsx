import { FC, MouseEventHandler, PropsWithChildren } from 'react';

import createClass from '../../../utils/createClass';
import { ButtonProps } from '../../../types/ui';
import styles from './Button.module.scss';

const Button: FC<PropsWithChildren<Partial<ButtonProps>>> = (props) => {
  const {
    value = '',
    className = '',
    variant = 'primary',
    callback,
    onClick: handleClick,
    children,
  } = props;
  const defaultHandleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event?.preventDefault();
    callback?.();
  };
  return (
    <button
      onClick={handleClick ?? defaultHandleClick}
      className={createClass([`${className}`, styles.button, styles[variant]])}
    >
      {value}{children}
    </button>
  );
}

export default Button;
