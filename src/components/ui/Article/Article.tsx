import { FC } from 'react';

import createClass from '../../../utils/createClass';
import { ArticleProps } from '../../../types/ui';

import styles from './Article.module.scss';

const Article: FC<Partial<ArticleProps>> = ({ value = '', className = '' }) => {
  return <article className={createClass([styles.article, `${className}`])}>{value}</article>;
};

export default Article;
