import { BaseModel } from '../BaseModel';
import { HrTimesheetTip } from '../types/hr.timesheet.tip';

export class HrTimesheetTipModel extends BaseModel<HrTimesheetTip> {
  protected readonly model = 'hr.timesheet.tip';
}
