import { faker } from '@faker-js/faker';
import { format } from 'date-fns'

import BaseModel from './BaseModel';
import TagModel from './TagModel ';
import { CardProps } from '../types/model';
import { Variant } from '../types/common';
import uuid from '../utils/uuid';


class CardModel extends BaseModel {
  override items: TagModel[] = [];

  userId = uuid();
  
  avatar = '';

  variant: Variant = 'secondary';

  startDate = faker.date.anytime();

  endDate = faker.date.anytime();

  constructor(options: CardProps) {
    const { 
      name = '',
      description = '',
      variant = 'primary',
      userId = '',
      isEdit = false,
      parent,
      avatar = '',
    } = options;
    super({
      name,
      description,
      items: [],
      isEdit: false,
      parent,
    });
  
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
