import { BaseModel } from '../BaseModel';
import { HrDepartureReason } from '../types/hr.departure.reason';

export class HrDepartureReasonModel extends BaseModel<HrDepartureReason> {
  protected readonly model = 'hr.departure.reason';
}
