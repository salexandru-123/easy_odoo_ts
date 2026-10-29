import { BaseModel } from '../BaseModel';
import { HrSkill } from '../types/hr.skill';

export class HrSkillModel extends BaseModel<HrSkill> {
  protected readonly model = 'hr.skill';
}
