import { BaseModel } from '../BaseModel';
import { HelpdeskTag } from '../types/helpdesk.tag';

export class HelpdeskTagModel extends BaseModel<HelpdeskTag> {
  protected readonly model = 'helpdesk.tag';
}
