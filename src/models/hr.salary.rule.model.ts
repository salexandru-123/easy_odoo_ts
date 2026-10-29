import { BaseModel } from '../BaseModel';
import { HrSalaryRule } from '../types/hr.salary.rule';

export class HrSalaryRuleModel extends BaseModel<HrSalaryRule> {
  protected readonly model = 'hr.salary.rule';
}
