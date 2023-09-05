import { action, makeObservable, observable } from 'mobx';

import BoardModel from '../model/BoardModel';
import getTodo from './todo.service';
import CardModel from '../model/CardModel';
import { faker } from '@faker-js/faker';
import BaseModel from '../model/BaseModel';

class TaskManagerStore {
  boards: BoardModel[] = [];
  groupIds: string[] = [];
  cardIds: string[] = [];
  page: number = 0;
  maxCards: number = 200;
  isEnd = false;
  user = {
    userId: '1',
    avatar: faker.image.avatar(),
  }

  constructor() {
    makeObservable(this, {
      user: observable,
      boards: observable,
      groupIds: observable,
      cardIds: observable,
      page: observable,
      maxCards: observable,
      isEnd: observable,
      addBoard: action.bound,
      addCardId: action.bound,
      addGroupId: action.bound,
      removeCardId: action.bound,
      removeGroupId: action.bound,
      getTodo: action.bound,
    });
  }

  addBoard(newBoard: BoardModel) {
    this.boards = [
      ...this.boards,
      newBoard,
    ];
  }
  
  addCardId(newCardId: string) {
    this.cardIds = [
      ...this.cardIds,
      newCardId,
    ];
  }

  addGroupId(newGroupId: string) {
    this.groupIds = [
      ...this.groupIds,
      newGroupId,
    ];
  }

  removeCardId(removeCardId: string) {
    this.cardIds = this.cardIds.filter((cardId) => cardId !== removeCardId);
  }

  removeGroupId(removeGroupId: string) {
    this.groupIds = this.groupIds.filter((groupId) => groupId !== removeGroupId);
  }

  getTodo = async () => {
    const avatar = this.user.avatar;
    const todo = async () => {
      const td = await getTodo({ page: this.page, limit: 10 });
      const cards = (td.data as {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }[])
      .map(
        ({ userId, title, completed }) => (
          new CardModel({
            name: title,
            userId: `${userId}`,
            isEdit: completed,
            description: '',
            avatar,
            parent: this.boards[0].items[0],
          })
        )
      );
      this.boards[0].items[0].items = [...this.boards[0].items[0].items, ...cards];
      this.cardIds = cards.map(({ id }) => id);
    };
    if (this.boards[0].items[0].items.length >= this.maxCards) {
      this.isEnd = true;
    } else {
      todo();
    }
    this.page += 1;
  } 
}

const InstanceTaskManagerStore =  new TaskManagerStore();

InstanceTaskManagerStore.addBoard(
  new BoardModel({
    name: 'test',
    description: '', 
    parent: new BaseModel({
      name: 'root',
      description: '',
      parent: undefined,
    })
  })
);

export default InstanceTaskManagerStore;
