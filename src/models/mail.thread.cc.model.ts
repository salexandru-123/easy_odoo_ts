import { BaseModel } from '../BaseModel';
import { MailThreadCc } from '../types/mail.thread.cc';

export class MailThreadCcModel extends BaseModel<MailThreadCc> {
  protected readonly model = 'mail.thread.cc';
}
