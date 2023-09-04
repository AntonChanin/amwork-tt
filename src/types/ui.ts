import { BaseComponentProps, StylesProps, VoidCallbackWithProps, ClickButton, VoidCallback } from './common';

type ArticleProps = BaseComponentProps & StylesProps;

type ButtonProps = BaseComponentProps & StylesProps & ClickButton & VoidCallback;

type TagMarkProps = BaseComponentProps & StylesProps;

type PaperProps = StylesProps;

type EditProps = BaseComponentProps & StylesProps & VoidCallbackWithProps;

export type { ArticleProps, ButtonProps, TagMarkProps, PaperProps, EditProps };
