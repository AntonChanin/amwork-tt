import BaseModel from './BaseModel';
import GroupModel from './GroupModel';

class BoardModel extends BaseModel {
  override items: GroupModel[] = [];

  constructor(options: Record<string, any>) {
    const { name, description, parent } = options;
    super({ name, description, parent });
  }

  addGroup = (newGroup: GroupModel) => {
    this.addItem(newGroup as BaseModel);
  }
}

export default BoardModel;
