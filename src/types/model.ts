import BaseModel from '../model/BaseModel';

type BaseProps<I = BaseModel> = {
  name: string,
  description: string,
  items?: I[]
  isEdit?: boolean,
};

export type { BaseProps };
