import { BaseModel } from '../BaseModel';
import { HrDepartment } from '../types/hr.department';

export class HrDepartmentModel extends BaseModel<HrDepartment> {
  protected readonly model = 'hr.department';
}
