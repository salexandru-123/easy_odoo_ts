import { BaseModel } from '../BaseModel';
import { CalendarRecurrence } from '../types/calendar.recurrence';

export class CalendarRecurrenceModel extends BaseModel<CalendarRecurrence> {
  protected readonly model = 'calendar.recurrence';
}
