import { BaseModel } from '../BaseModel';
import { ApprovalApprover } from '../types/approval.approver';

export class ApprovalApproverModel extends BaseModel<ApprovalApprover> {
  protected readonly model = 'approval.approver';
}
