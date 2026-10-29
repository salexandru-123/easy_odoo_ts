import { BaseModel } from '../BaseModel';
import { HrLeaveAccrualLevel } from '../types/hr.leave.accrual.level';

export class HrLeaveAccrualLevelModel extends BaseModel<HrLeaveAccrualLevel> {
  protected readonly model = 'hr.leave.accrual.level';
}
