import { BaseModel } from '../BaseModel';
import { ResourceCalendarAttendance } from '../types/resource.calendar.attendance';

export class ResourceCalendarAttendanceModel extends BaseModel<ResourceCalendarAttendance> {
  protected readonly model = 'resource.calendar.attendance';
}
