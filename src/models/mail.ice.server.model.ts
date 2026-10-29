import { BaseModel } from '../BaseModel';
import { MailIceServer } from '../types/mail.ice.server';

export class MailIceServerModel extends BaseModel<MailIceServer> {
  protected readonly model = 'mail.ice.server';
}
