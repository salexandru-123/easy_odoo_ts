import { BaseModel } from '../BaseModel';
import { HrEmployeeBase } from '../types/hr.employee.base';

export class HrEmployeeBaseModel extends BaseModel<HrEmployeeBase> {
  protected readonly model = 'hr.employee.base';
}
