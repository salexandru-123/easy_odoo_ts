import { BaseModel } from '../BaseModel';
import { HrApplicant } from '../types/hr.applicant';

export class HrApplicantModel extends BaseModel<HrApplicant> {
  protected readonly model = 'hr.applicant';
}
