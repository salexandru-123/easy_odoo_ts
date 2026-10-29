import { BaseModel } from '../BaseModel';
import { HrAppraisalGoal } from '../types/hr.appraisal.goal';

export class HrAppraisalGoalModel extends BaseModel<HrAppraisalGoal> {
  protected readonly model = 'hr.appraisal.goal';
}
