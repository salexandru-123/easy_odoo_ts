import { BaseModel } from '../BaseModel';
import { HrApplicantCategory } from '../types/hr.applicant.category';

export class HrApplicantCategoryModel extends BaseModel<HrApplicantCategory> {
  protected readonly model = 'hr.applicant.category';
}
