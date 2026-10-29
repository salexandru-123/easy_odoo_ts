import { BaseModel } from '../BaseModel';
import { HrJob } from '../types/hr.job';

export class HrJobModel extends BaseModel<HrJob> {
  protected readonly model = 'hr.job';
}
