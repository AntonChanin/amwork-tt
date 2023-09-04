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

  constructor() {
    makeObservable(this, {
      boards: observable,
      groupIds: observable,
      cardIds: observable,
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
    const avatar = faker.image.avatar();
    const todo = async () => {
      const td = await getTodo();
      const cards = (td.data as {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }[])
      .map(
        ({ id, userId, title, completed }) => (
          new CardModel({
            id: `${id}`,
            name: title,
            userId: `${userId}`,
            isEdit: completed,
            description: '',
            avatar,
            parent: this.boards[0].items[0],
          })
        )
      );
      this.boards[0].items[0].items = [...cards];
      this.cardIds = cards.map(({ id }) => id);
    };
    todo();
  } 
}

const InstanceTaskManagerStore =  new TaskManagerStore();

InstanceTaskManagerStore.addBoard(new BoardModel({ name: 'test', description: '', parent: new BaseModel({
  name: 'root',
  description: '',
  parent: undefined,
}) }))

export default InstanceTaskManagerStore;
