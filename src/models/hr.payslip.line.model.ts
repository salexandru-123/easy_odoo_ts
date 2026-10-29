import { BaseModel } from '../BaseModel';
import { HrPayslipLine } from '../types/hr.payslip.line';

export class HrPayslipLineModel extends BaseModel<HrPayslipLine> {
  protected readonly model = 'hr.payslip.line';
}
