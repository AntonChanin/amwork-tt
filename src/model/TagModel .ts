import BaseModel from './BaseModel';
import { TagProps } from '../types/model';

class TagModel extends BaseModel {
  constructor(options: TagProps) {
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
