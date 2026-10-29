import { BaseModel } from '../BaseModel';
import { CrmTag } from '../types/crm.tag';

export class CrmTagModel extends BaseModel<CrmTag> {
  protected readonly model = 'crm.tag';
}
