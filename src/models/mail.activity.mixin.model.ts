import { BaseModel } from '../BaseModel';
import { MailActivityMixin } from '../types/mail.activity.mixin';

export class MailActivityMixinModel extends BaseModel<MailActivityMixin> {
  protected readonly model = 'mail.activity.mixin';
}
