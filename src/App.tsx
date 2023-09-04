import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import BoardView from './components/view/BoardView';
import InstanceTaskManagerStore from './store';

import BoardModel from './model/BoardModel';
import GroupModel from './model/GroupModel';
import './App.css';

function App() {
  const { boards } = InstanceTaskManagerStore;

  useEffect(() => {
    InstanceTaskManagerStore.addBoard(new BoardModel({}));
    if (!InstanceTaskManagerStore.boards[0].items.length)
      InstanceTaskManagerStore.boards[0].addGroup(
        new GroupModel({ name: 'Today', parent: boards })
      );
    InstanceTaskManagerStore.getTodo();
  }, [])
  

  return (
    <div className="App">
      <div className="logo">
        <div>
          <span className="headerTitle am">Am</span>
          <span className="headerTitle work">work</span>
        </div>
        <span className="isCrm">{' X '}</span>
        <img className="crm" src="src/assets/icons/super.png" alt="" />
      </div>
      <BoardView model={boards[0]} />   
    </div>
  );
}

export default observer(App);
