import { CSSProperties, MouseEventHandler } from 'react';

/**
 * @description base param for Component
 * @param value some string value for any component
 */

type BaseComponentProps = {
  value: string;
  placeholder: string;
}

/**
 * @description styles params for any component
 * @param style inline styles for any Component
 * @param variant any component variant can 'primary', 'secondary' or 'thirdy'
 * @param theme for any component can 'dark' or 'light' 
 */
type StylesProps = {
  style: CSSProperties | string;
  className: string | Record<string, string>;
  variant: Variant;
}

/**
 * @description onClick for HTMLButtonElement
 */
type ClickButton = {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

/**
 * @description callback return void
 */
type VoidCallback = {
  callback(): void;
};

type VoidCallbackWithWrapProps = {
  callback: <T>() => (props: Record<string, T>) => void;
};


type Variant = 'primary' | 'secondary' | 'thirdy';

export type {
  BaseComponentProps,
  StylesProps,
  ClickButton,
  VoidCallback,
  VoidCallbackWithWrapProps,
  Variant,
};
