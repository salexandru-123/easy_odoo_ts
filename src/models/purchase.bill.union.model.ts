import { BaseModel } from '../BaseModel';
import { PurchaseBillUnion } from '../types/purchase.bill.union';

export class PurchaseBillUnionModel extends BaseModel<PurchaseBillUnion> {
  protected readonly model = 'purchase.bill.union';
}
