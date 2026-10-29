import { BaseModel } from '../BaseModel';
import { CalendarEvent } from '../types/calendar.event';

export class CalendarEventModel extends BaseModel<CalendarEvent> {
  protected readonly model = 'calendar.event';
}
