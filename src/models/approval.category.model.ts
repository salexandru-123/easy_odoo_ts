import { BaseModel } from '../BaseModel';
import { ApprovalCategory } from '../types/approval.category';

export class ApprovalCategoryModel extends BaseModel<ApprovalCategory> {
  protected readonly model = 'approval.category';
}
