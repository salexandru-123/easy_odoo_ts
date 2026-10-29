import { BaseModel } from '../BaseModel';
import { ResourceCalendarLeaves } from '../types/resource.calendar.leaves';

export class ResourceCalendarLeavesModel extends BaseModel<ResourceCalendarLeaves> {
  protected readonly model = 'resource.calendar.leaves';
}
