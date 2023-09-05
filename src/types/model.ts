import BaseModel from '../model/BaseModel';
import BoardModel from '../model/BoardModel';
import CardModel from '../model/CardModel';
import GroupModel from '../model/GroupModel';
import TagModel from '../model/TagModel ';
import { Variant } from './common';

type BaseProps<I = BaseModel, P = BaseModel> = {
  name: string,
  description: string,
  items?: I[],
  parent?: P,
  isEdit?: boolean,
};

type BoardProps = BaseProps<GroupModel, BaseModel>;
type CardProps = BaseProps<TagModel, GroupModel> & Partial<{
  avatar: string;
  variant: Variant;
  userId: string;
}>;
type GroupProps = BaseProps<CardModel, BoardModel>;
type TagProps = BaseProps<BaseModel, CardModel>;

export type { BaseProps, BoardProps, CardProps, GroupProps, TagProps };
