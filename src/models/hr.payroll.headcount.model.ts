import { BaseModel } from '../BaseModel';
import { HrPayrollHeadcount } from '../types/hr.payroll.headcount';

export class HrPayrollHeadcountModel extends BaseModel<HrPayrollHeadcount> {
  protected readonly model = 'hr.payroll.headcount';
}
