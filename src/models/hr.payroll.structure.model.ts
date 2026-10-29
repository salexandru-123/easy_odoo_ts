import { BaseModel } from '../BaseModel';
import { HrPayrollStructure } from '../types/hr.payroll.structure';

export class HrPayrollStructureModel extends BaseModel<HrPayrollStructure> {
  protected readonly model = 'hr.payroll.structure';
}
