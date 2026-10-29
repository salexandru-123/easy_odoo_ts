import { BaseModel } from '../BaseModel';
import { HrLeaveAccrualPlan } from '../types/hr.leave.accrual.plan';

export class HrLeaveAccrualPlanModel extends BaseModel<HrLeaveAccrualPlan> {
  protected readonly model = 'hr.leave.accrual.plan';
}
