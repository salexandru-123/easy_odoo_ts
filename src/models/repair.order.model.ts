import { BaseModel } from '../BaseModel';
import { RepairOrder } from '../types/repair.order';

export class RepairOrderModel extends BaseModel<RepairOrder> {
  protected readonly model = 'repair.order';
}
