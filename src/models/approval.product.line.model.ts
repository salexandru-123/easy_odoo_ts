import { BaseModel } from '../BaseModel';
import { ApprovalProductLine } from '../types/approval.product.line';

export class ApprovalProductLineModel extends BaseModel<ApprovalProductLine> {
  protected readonly model = 'approval.product.line';
}
