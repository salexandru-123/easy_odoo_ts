import { BaseModel } from '../BaseModel';
import { MailMessage } from '../types/mail.message';

export class MailMessageModel extends BaseModel<MailMessage> {
  protected readonly model = 'mail.message';
}
