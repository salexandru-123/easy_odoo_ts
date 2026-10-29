import { BaseModel } from '../BaseModel';
import { MailFollowers } from '../types/mail.followers';

export class MailFollowersModel extends BaseModel<MailFollowers> {
  protected readonly model = 'mail.followers';
}
