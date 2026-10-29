import { BaseModel } from '../BaseModel';
import { MailGuest } from '../types/mail.guest';

export class MailGuestModel extends BaseModel<MailGuest> {
  protected readonly model = 'mail.guest';
}
