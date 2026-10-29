import { BaseModel } from '../BaseModel';
import { PurchaseOrder } from '../types/purchase.order';

export class PurchaseOrderModel extends BaseModel<PurchaseOrder> {
  protected readonly model = 'purchase.order';
}
