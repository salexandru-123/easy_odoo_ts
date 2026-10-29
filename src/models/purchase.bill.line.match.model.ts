import { BaseModel } from '../BaseModel';
import { PurchaseBillLineMatch } from '../types/purchase.bill.line.match';

export class PurchaseBillLineMatchModel extends BaseModel<PurchaseBillLineMatch> {
  protected readonly model = 'purchase.bill.line.match';
}
