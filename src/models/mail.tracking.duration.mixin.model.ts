import { BaseModel } from '../BaseModel';
import { MailTrackingDurationMixin } from '../types/mail.tracking.duration.mixin';

export class MailTrackingDurationMixinModel extends BaseModel<MailTrackingDurationMixin> {
  protected readonly model = 'mail.tracking.duration.mixin';
}
