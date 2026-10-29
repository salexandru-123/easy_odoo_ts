import { BaseModel } from '../BaseModel';
import { HrSalaryRuleCategory } from '../types/hr.salary.rule.category';

export class HrSalaryRuleCategoryModel extends BaseModel<HrSalaryRuleCategory> {
  protected readonly model = 'hr.salary.rule.category';
}
