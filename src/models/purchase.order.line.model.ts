import { BaseModel } from '../BaseModel';
import { PurchaseOrderLine } from '../types/purchase.order.line';

export class PurchaseOrderLineModel extends BaseModel<PurchaseOrderLine> {
  protected readonly model = 'purchase.order.line';
}
