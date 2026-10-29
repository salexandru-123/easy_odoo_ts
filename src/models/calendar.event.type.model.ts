import { BaseModel } from '../BaseModel';
import { CalendarEventType } from '../types/calendar.event.type';

export class CalendarEventTypeModel extends BaseModel<CalendarEventType> {
  protected readonly model = 'calendar.event.type';
}
