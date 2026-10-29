import { BaseModel } from '../BaseModel';
import { MailScheduledMessage } from '../types/mail.scheduled.message';

export class MailScheduledMessageModel extends BaseModel<MailScheduledMessage> {
  protected readonly model = 'mail.scheduled.message';
}
