import { BaseModel } from '../BaseModel';
import { HrPayslipEmployees } from '../types/hr.payslip.employees';

export class HrPayslipEmployeesModel extends BaseModel<HrPayslipEmployees> {
  protected readonly model = 'hr.payslip.employees';
}
