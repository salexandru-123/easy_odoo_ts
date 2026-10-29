import { BaseModel } from '../BaseModel';
import { CalendarFilters } from '../types/calendar.filters';

export class CalendarFiltersModel extends BaseModel<CalendarFilters> {
  protected readonly model = 'calendar.filters';
}
