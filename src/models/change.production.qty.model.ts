import { BaseModel } from '../BaseModel';
import { ChangeProductionQty } from '../types/change.production.qty';

export class ChangeProductionQtyModel extends BaseModel<ChangeProductionQty> {
  protected readonly model = 'change.production.qty';
}
