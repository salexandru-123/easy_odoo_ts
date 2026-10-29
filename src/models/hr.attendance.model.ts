import { BaseModel } from '../BaseModel';
import { HrAttendance } from '../types/hr.attendance';

export class HrAttendanceModel extends BaseModel<HrAttendance> {
  protected readonly model = 'hr.attendance';
}
