import createClass from '../utils/createClass';
import uuid from '../utils/uuid';

class BaseModel {

  private __id = '';
  private __name = '';
  private __parent?: BaseModel;

  description = '';
  isEdit = false;
  items: BaseModel[] = [];

  constructor(options: Record<string, any>) {
    const { name, description, parent } = options;

    this.__id = uuid();
    this.__name = name;
    this.__parent = parent;

    this.description = description;
  }

  protected addItem = (newItem: BaseModel) => {
    this.items = [
      ...this.items,
      newItem,
    ];
  };

  makeClass = (classes: string[]) => createClass(classes);

  didUpdate = () => {};

  get id() {
    return this.__id;
  }

  get parent() {
    return this.__parent;
  }

  get name() {
    return this.__name;
  }

  set name(newVName: string) {
    this.__name = newVName;
  }

}

export default BaseModel;
