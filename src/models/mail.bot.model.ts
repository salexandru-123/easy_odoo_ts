import { BaseModel } from '../BaseModel';
import { MailBot } from '../types/mail.bot';

export class MailBotModel extends BaseModel<MailBot> {
  protected readonly model = 'mail.bot';
}
