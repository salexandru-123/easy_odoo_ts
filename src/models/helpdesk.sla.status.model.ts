import { BaseModel } from '../BaseModel';
import { HelpdeskSlaStatus } from '../types/helpdesk.sla.status';

export class HelpdeskSlaStatusModel extends BaseModel<HelpdeskSlaStatus> {
  protected readonly model = 'helpdesk.sla.status';
}
