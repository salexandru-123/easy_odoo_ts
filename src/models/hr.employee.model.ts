import { BaseModel } from '../BaseModel';
import { HrEmployee } from '../types/hr.employee';

export class HrEmployeeModel extends BaseModel<HrEmployee> {
  protected readonly model = 'hr.employee';
}
