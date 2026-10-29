import { BaseModel } from '../BaseModel';
import { HrPayslip } from '../types/hr.payslip';

export class HrPayslipModel extends BaseModel<HrPayslip> {
  protected readonly model = 'hr.payslip';
}
