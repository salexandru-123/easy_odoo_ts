import { BaseModel } from '../BaseModel';
import { HrPayrollIndex } from '../types/hr.payroll.index';

export class HrPayrollIndexModel extends BaseModel<HrPayrollIndex> {
  protected readonly model = 'hr.payroll.index';
}
