import { BaseModel } from '../BaseModel';
import { HrLeaveMandatoryDay } from '../types/hr.leave.mandatory.day';

export class HrLeaveMandatoryDayModel extends BaseModel<HrLeaveMandatoryDay> {
  protected readonly model = 'hr.leave.mandatory.day';
}
