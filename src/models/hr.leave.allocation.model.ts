import { BaseModel } from '../BaseModel';
import { HrLeaveAllocation } from '../types/hr.leave.allocation';

export class HrLeaveAllocationModel extends BaseModel<HrLeaveAllocation> {
  protected readonly model = 'hr.leave.allocation';
}
