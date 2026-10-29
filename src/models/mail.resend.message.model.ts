import { BaseModel } from '../BaseModel';
import { MailResendMessage } from '../types/mail.resend.message';

export class MailResendMessageModel extends BaseModel<MailResendMessage> {
  protected readonly model = 'mail.resend.message';
}
