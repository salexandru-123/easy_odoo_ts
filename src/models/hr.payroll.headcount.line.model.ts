import { BaseModel } from '../BaseModel';
import { HrPayrollHeadcountLine } from '../types/hr.payroll.headcount.line';

export class HrPayrollHeadcountLineModel extends BaseModel<HrPayrollHeadcountLine> {
  protected readonly model = 'hr.payroll.headcount.line';
}
