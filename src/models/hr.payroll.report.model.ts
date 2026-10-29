import { BaseModel } from '../BaseModel';
import { HrPayrollReport } from '../types/hr.payroll.report';

export class HrPayrollReportModel extends BaseModel<HrPayrollReport> {
  protected readonly model = 'hr.payroll.report';
}
