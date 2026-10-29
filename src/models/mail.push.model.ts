import { BaseModel } from '../BaseModel';
import { MailPush } from '../types/mail.push';

export class MailPushModel extends BaseModel<MailPush> {
  protected readonly model = 'mail.push';
}
