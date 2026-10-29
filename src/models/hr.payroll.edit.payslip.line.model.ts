import { BaseModel } from '../BaseModel';
import { HrPayrollEditPayslipLine } from '../types/hr.payroll.edit.payslip.line';

export class HrPayrollEditPayslipLineModel extends BaseModel<HrPayrollEditPayslipLine> {
  protected readonly model = 'hr.payroll.edit.payslip.line';
}
