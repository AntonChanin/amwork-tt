import { FC } from 'react';
import { observer } from 'mobx-react-lite';

import Article from '../../ui/Article/Article';
import TagMark from '../../ui/TagMark';
import Paper from '../../ui/Paper/Paper';
import Title from '../../ui/Title';
import Row from '../../ui/Row/Row';
import CardModel from '../../../model/CardModel';
import { ViewWithModel } from '../../../types/view';
import { Variant } from '../../../types/common';

import styles from './CardView.module.scss';
import Avatar from '../../ui/Avatar';

const CardView: FC<ViewWithModel<CardModel>> = (props) => {
  const { model } = props;
  const {
    name,
    description,
    isEdit,
    items: tags,
    avatar,
    getStartDateByFormat,
    getEndDateByFormat,
  } = model;  

  return (
    <div className={styles.wrapper}>
      <Paper className={styles.card}>
        <Row className={styles.titleLine}>
          <Title value={name} className={styles.mainTitle}>
            <span className={styles.ckeckbox}>{isEdit ? '☑ ' : '☐ '}</span>
          </Title>
        </Row>
        <Row>
          <Title value={getStartDateByFormat()} />
          <Title value={getEndDateByFormat()} />
        </Row>
        <Article value={description} />
        <Row className={styles.tagLine}>
          <Row className={styles.tags}>{
            tags.map(({ name, description }) => <TagMark variant={description as Variant} value={name} />)
          }</Row>
          <Avatar src={avatar} />
        </Row>
      </Paper>
    </div>
    
  );
};

export default observer(CardView);
