import { BaseModel } from '../BaseModel';
import { RequestAppraisal } from '../types/request.appraisal';

export class RequestAppraisalModel extends BaseModel<RequestAppraisal> {
  protected readonly model = 'request.appraisal';
}
