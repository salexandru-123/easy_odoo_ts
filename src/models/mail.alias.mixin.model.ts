import { BaseModel } from '../BaseModel';
import { MailAliasMixin } from '../types/mail.alias.mixin';

export class MailAliasMixinModel extends BaseModel<MailAliasMixin> {
  protected readonly model = 'mail.alias.mixin';
}
