import { BaseModel } from '../BaseModel';
import { MailTrackingValue } from '../types/mail.tracking.value';

export class MailTrackingValueModel extends BaseModel<MailTrackingValue> {
  protected readonly model = 'mail.tracking.value';
}
