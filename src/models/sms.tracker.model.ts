import { BaseModel } from '../BaseModel';
import { SmsTracker } from '../types/sms.tracker';

export class SmsTrackerModel extends BaseModel<SmsTracker> {
  protected readonly model = 'sms.tracker';
}
