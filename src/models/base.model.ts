import { BaseModel } from '../BaseModel';
import { Base } from '../types/base';

export class BaseModel extends BaseModel<Base> {
  protected readonly model = 'base';
}
