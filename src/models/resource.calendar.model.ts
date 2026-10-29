import { BaseModel } from '../BaseModel';
import { ResourceCalendar } from '../types/resource.calendar';

export class ResourceCalendarModel extends BaseModel<ResourceCalendar> {
  protected readonly model = 'resource.calendar';
}
