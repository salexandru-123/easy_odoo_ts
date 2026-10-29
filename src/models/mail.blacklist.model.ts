import { BaseModel } from '../BaseModel';
import { MailBlacklist } from '../types/mail.blacklist';

export class MailBlacklistModel extends BaseModel<MailBlacklist> {
  protected readonly model = 'mail.blacklist';
}
