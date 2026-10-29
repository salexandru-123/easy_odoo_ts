import { BaseModel } from '../BaseModel';
import { CalendarAttendee } from '../types/calendar.attendee';

export class CalendarAttendeeModel extends BaseModel<CalendarAttendee> {
  protected readonly model = 'calendar.attendee';
}
