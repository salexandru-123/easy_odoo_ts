import { BaseModel } from '../BaseModel';
import { CalendarProviderConfig } from '../types/calendar.provider.config';

export class CalendarProviderConfigModel extends BaseModel<CalendarProviderConfig> {
  protected readonly model = 'calendar.provider.config';
}
