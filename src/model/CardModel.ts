import { faker } from '@faker-js/faker';
import { format } from 'date-fns'

import BaseModel from './BaseModel';
import GroupModel from './GroupModel';
import TagModel from './TagModel ';
import { Variant } from '../types/common';
import uuid from '../utils/uuid';

class CardModel extends BaseModel {
  override items: TagModel[] = [];
  override parent: GroupModel | null  = null;

  userId = uuid();

  variant: Variant = 'secondary';

  startDate = faker.date.anytime();

  endDate = faker.date.anytime();

  avatar = '';

  constructor(options: Record<string, any>) {
    const { 
      name,
      description,
      variant = 'primary',
      userId,
      isEdit,
      parent,
      avatar = '',
    } = options;
    super({
      name,
      description,
      items: [],
      isEdit: false,
      parent: undefined,
    });
  
    this.parent = parent;
    this.description =  faker.lorem.text();
    
    this.variant = variant;
    this.userId = userId;
    this.isEdit = isEdit;
    this.avatar = avatar;

    this.addItem(new TagModel({
      name: 'Entity title',
      description: 'primary',
      parent: this,
    }));
    this.addItem(new TagModel({
      name: 'Front-end',
      description: 'secondary',
      parent: this,
    }));
  }

  getStartDateByFormat = () => {
    return format(this.startDate, 'MMM M, hh:mm a')
  }

  getEndDateByFormat = () => {
    return format(this.endDate, 'MMM M, hh:mm a')
  }
}

export default CardModel;
