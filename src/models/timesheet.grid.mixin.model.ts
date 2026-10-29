import { BaseModel } from '../BaseModel';
import { TimesheetGridMixin } from '../types/timesheet.grid.mixin';

export class TimesheetGridMixinModel extends BaseModel<TimesheetGridMixin> {
  protected readonly model = 'timesheet.grid.mixin';
}
