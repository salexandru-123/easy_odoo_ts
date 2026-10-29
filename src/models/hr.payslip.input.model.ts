import { BaseModel } from '../BaseModel';
import { HrPayslipInput } from '../types/hr.payslip.input';

export class HrPayslipInputModel extends BaseModel<HrPayslipInput> {
  protected readonly model = 'hr.payslip.input';
}
