import { BaseModel } from '../BaseModel';
import { HrPayslipWorkedDays } from '../types/hr.payslip.worked_days';

export class HrPayslipWorkedDaysModel extends BaseModel<HrPayslipWorkedDays> {
  protected readonly model = 'hr.payslip.worked_days';
}
