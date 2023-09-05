import BaseModel from './BaseModel';
import GroupModel from './GroupModel';
import { BoardProps } from '../types/model';

class BoardModel extends BaseModel {
  
  override items: GroupModel[] = [];

  constructor(options?: BoardProps) {
    const { name, description, parent } = options ?? {
      name: '',
      description: '',
    };
    super({ name, description, parent });
  }

  addGroup = (newGroup: GroupModel) => {
    this.addItem(newGroup as BaseModel);
  }
}

export default BoardModel;
