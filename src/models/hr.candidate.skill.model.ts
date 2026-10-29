import { BaseModel } from '../BaseModel';
import { HrCandidateSkill } from '../types/hr.candidate.skill';

export class HrCandidateSkillModel extends BaseModel<HrCandidateSkill> {
  protected readonly model = 'hr.candidate.skill';
}
