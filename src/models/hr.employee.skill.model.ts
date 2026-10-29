import { BaseModel } from '../BaseModel';
import { HrEmployeeSkill } from '../types/hr.employee.skill';

export class HrEmployeeSkillModel extends BaseModel<HrEmployeeSkill> {
  protected readonly model = 'hr.employee.skill';
}
