import { BaseModel } from '../BaseModel';
import { MailThread } from '../types/mail.thread';

export class MailThreadModel extends BaseModel<MailThread> {
  protected readonly model = 'mail.thread';
}
