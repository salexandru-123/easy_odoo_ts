import { BaseModel } from '../BaseModel';
import { ApprovalRequest } from '../types/approval.request';

export class ApprovalRequestModel extends BaseModel<ApprovalRequest> {
  protected readonly model = 'approval.request';
}
