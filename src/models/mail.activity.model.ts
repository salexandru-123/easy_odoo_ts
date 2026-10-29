import { BaseModel } from '../BaseModel';
import { MailActivity } from '../types/mail.activity';

export class MailActivityModel extends BaseModel<MailActivity> {
  protected readonly model = 'mail.activity';
}
