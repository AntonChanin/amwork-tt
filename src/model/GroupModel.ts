import BaseModel from './BaseModel';
import CardModel from './CardModel';
import { GroupProps } from '../types/model';

class GroupModel extends BaseModel {

  override items: CardModel[] = [];

  constructor(options: GroupProps) {
    const { name, description, parent } = options;
    super({ name, description, parent });
  }
}

export default GroupModel;
