import { BaseModel } from '../BaseModel';
import { CalendarAlarmManager } from '../types/calendar.alarm_manager';

export class CalendarAlarmManagerModel extends BaseModel<CalendarAlarmManager> {
  protected readonly model = 'calendar.alarm_manager';
}
