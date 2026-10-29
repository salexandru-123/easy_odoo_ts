import { BaseModel } from '../BaseModel';
import { HrEmployeePublic } from '../types/hr.employee.public';

export class HrEmployeePublicModel extends BaseModel<HrEmployeePublic> {
  protected readonly model = 'hr.employee.public';
}
