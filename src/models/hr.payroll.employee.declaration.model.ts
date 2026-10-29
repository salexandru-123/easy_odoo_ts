import { BaseModel } from '../BaseModel';
import { HrPayrollEmployeeDeclaration } from '../types/hr.payroll.employee.declaration';

export class HrPayrollEmployeeDeclarationModel extends BaseModel<HrPayrollEmployeeDeclaration> {
  protected readonly model = 'hr.payroll.employee.declaration';
}
