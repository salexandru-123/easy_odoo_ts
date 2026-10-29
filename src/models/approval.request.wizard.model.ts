import { BaseModel } from '../BaseModel';
import { ApprovalRequestWizard } from '../types/approval.request.wizard';

export class ApprovalRequestWizardModel extends BaseModel<ApprovalRequestWizard> {
  protected readonly model = 'approval.request.wizard';
}
