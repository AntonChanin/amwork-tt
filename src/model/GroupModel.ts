import BaseModel from './BaseModel';
import CardModel from './CardModel';

class GroupModel extends BaseModel {

  override items: CardModel[] = [];

  constructor(options: Record<string, any>) {
    const { name, description, parent } = options;
    super({ name, description, parent });
  }
}

export default GroupModel;
