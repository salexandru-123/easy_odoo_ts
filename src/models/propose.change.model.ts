import { BaseModel } from '../BaseModel';
import { ProposeChange } from '../types/propose.change';

export class ProposeChangeModel extends BaseModel<ProposeChange> {
  protected readonly model = 'propose.change';
}
