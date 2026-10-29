import { BaseModel } from '../BaseModel';
import { HelpdeskStage } from '../types/helpdesk.stage';

export class HelpdeskStageModel extends BaseModel<HelpdeskStage> {
  protected readonly model = 'helpdesk.stage';
}
