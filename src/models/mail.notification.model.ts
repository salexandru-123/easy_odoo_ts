import { BaseModel } from '../BaseModel';
import { MailNotification } from '../types/mail.notification';

export class MailNotificationModel extends BaseModel<MailNotification> {
  protected readonly model = 'mail.notification';
}
