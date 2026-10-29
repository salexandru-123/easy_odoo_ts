import { BaseModel } from '../BaseModel';
import { MailThreadBlacklist } from '../types/mail.thread.blacklist';

export class MailThreadBlacklistModel extends BaseModel<MailThreadBlacklist> {
  protected readonly model = 'mail.thread.blacklist';
}
