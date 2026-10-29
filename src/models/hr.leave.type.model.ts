import { BaseModel } from '../BaseModel';
import { HrLeaveType } from '../types/hr.leave.type';

export class HrLeaveTypeModel extends BaseModel<HrLeaveType> {
  protected readonly model = 'hr.leave.type';
}
