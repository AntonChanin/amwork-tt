import { BaseComponentProps, StylesProps, ClickButton, VoidCallback } from './common';

type ArticleProps = BaseComponentProps & StylesProps;

type ButtonProps = BaseComponentProps & StylesProps & ClickButton & VoidCallback;

type TagMarkProps = BaseComponentProps & StylesProps;

type PaperProps = StylesProps;

export type { ArticleProps, ButtonProps, TagMarkProps, PaperProps };
