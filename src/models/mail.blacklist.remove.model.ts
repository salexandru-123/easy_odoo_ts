import { BaseModel } from '../BaseModel';
import { MailBlacklistRemove } from '../types/mail.blacklist.remove';

export class MailBlacklistRemoveModel extends BaseModel<MailBlacklistRemove> {
  protected readonly model = 'mail.blacklist.remove';
}
