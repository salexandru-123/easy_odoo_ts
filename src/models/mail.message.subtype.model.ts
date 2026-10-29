import { BaseModel } from '../BaseModel';
import { MailMessageSubtype } from '../types/mail.message.subtype';

export class MailMessageSubtypeModel extends BaseModel<MailMessageSubtype> {
  protected readonly model = 'mail.message.subtype';
}
