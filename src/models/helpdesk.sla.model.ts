import { BaseModel } from '../BaseModel';
import { HelpdeskSla } from '../types/helpdesk.sla';

export class HelpdeskSlaModel extends BaseModel<HelpdeskSla> {
  protected readonly model = 'helpdesk.sla';
}
