import { FC, } from 'react';
import { observer } from 'mobx-react-lite';

import Paper from '../../ui/Paper/Paper';
import BoardModel from '../../../model/BoardModel';
import GroupModel from '../../../model/GroupModel';
import GroupView from '../GroupView/GroupView';
import InstanceTaskManagerStore from '../../../store';
import useUpdate from '../../../hooks/useUpdate';
import { ViewWithModel } from '../../../types/view';

import styles from './BoardView.module.scss';

const BoardView: FC<ViewWithModel<BoardModel>> = (props) => {
  const { model } = props;
  const {
    items: groups,
    didUpdate,
  } = model;
  const { cardIds, groupIds } = InstanceTaskManagerStore;

  useUpdate(didUpdate, [cardIds.length, groupIds.length]);

  return (
    <Paper
      variant="secondary"
      className={styles.paper}
    >
      <div className={styles.group}>
        {groups.map((group) => <GroupView key={`group__${group.id}`} model={group as GroupModel} />)}
      </div>     
    </Paper>    
  );
};

export default observer(BoardView);
