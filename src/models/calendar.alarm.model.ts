import { BaseModel } from '../BaseModel';
import { CalendarAlarm } from '../types/calendar.alarm';

export class CalendarAlarmModel extends BaseModel<CalendarAlarm> {
  protected readonly model = 'calendar.alarm';
}
