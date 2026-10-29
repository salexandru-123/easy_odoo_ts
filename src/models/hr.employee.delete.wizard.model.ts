import { BaseModel } from '../BaseModel';
import { HrEmployeeDeleteWizard } from '../types/hr.employee.delete.wizard';

export class HrEmployeeDeleteWizardModel extends BaseModel<HrEmployeeDeleteWizard> {
  protected readonly model = 'hr.employee.delete.wizard';
}
