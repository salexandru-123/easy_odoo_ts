import { BaseModel } from '../BaseModel';
import { HrApplicantRefuseReason } from '../types/hr.applicant.refuse.reason';

export class HrApplicantRefuseReasonModel extends BaseModel<HrApplicantRefuseReason> {
  protected readonly model = 'hr.applicant.refuse.reason';
}
