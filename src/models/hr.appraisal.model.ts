import { BaseModel } from '../BaseModel';
import { HrAppraisal } from '../types/hr.appraisal';

export class HrAppraisalModel extends BaseModel<HrAppraisal> {
  protected readonly model = 'hr.appraisal';
}
