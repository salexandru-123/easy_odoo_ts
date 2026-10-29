import { BaseModel } from '../BaseModel';
import { StudioApprovalRequest } from '../types/studio.approval.request';

export class StudioApprovalRequestModel extends BaseModel<StudioApprovalRequest> {
  protected readonly model = 'studio.approval.request';
}
