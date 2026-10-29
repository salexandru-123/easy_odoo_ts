import { BaseModel } from '../BaseModel';
import { HrLeave } from '../types/hr.leave';

export class HrLeaveModel extends BaseModel<HrLeave> {
  protected readonly model = 'hr.leave';
}
