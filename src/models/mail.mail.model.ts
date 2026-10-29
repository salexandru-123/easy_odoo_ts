import { BaseModel } from '../BaseModel';
import { MailMail } from '../types/mail.mail';

export class MailMailModel extends BaseModel<MailMail> {
  protected readonly model = 'mail.mail';
}
