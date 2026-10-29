import { BaseModel } from '../BaseModel';
import { HrEmployeeCategory } from '../types/hr.employee.category';

export class HrEmployeeCategoryModel extends BaseModel<HrEmployeeCategory> {
  protected readonly model = 'hr.employee.category';
}
