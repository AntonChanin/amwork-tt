import { BaseProps } from '../types/model';
import BaseModel from './BaseModel';
import CardModel from './CardModel';

type Props<P = CardModel> = BaseProps & {
  parent: P;
}

class TagModel extends BaseModel {
  constructor(options: Props) {
    const { name, description, parent } = options;
    super({
      name,
      description,
      parent,
      items: [],
      isEdit: false
    });
  }
}

export default TagModel;
