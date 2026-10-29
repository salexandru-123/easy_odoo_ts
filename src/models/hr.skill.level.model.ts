import { BaseModel } from '../BaseModel';
import { HrSkillLevel } from '../types/hr.skill.level';

export class HrSkillLevelModel extends BaseModel<HrSkillLevel> {
  protected readonly model = 'hr.skill.level';
}
