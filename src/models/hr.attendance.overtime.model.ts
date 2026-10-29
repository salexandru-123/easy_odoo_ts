import { BaseModel } from '../BaseModel';
import { HrAttendanceOvertime } from '../types/hr.attendance.overtime';

export class HrAttendanceOvertimeModel extends BaseModel<HrAttendanceOvertime> {
  protected readonly model = 'hr.attendance.overtime';
}
