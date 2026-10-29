import { BaseModel } from '../BaseModel';
import { PurchaseReport } from '../types/purchase.report';

export class PurchaseReportModel extends BaseModel<PurchaseReport> {
  protected readonly model = 'purchase.report';
}
