import { BaseModel } from '../BaseModel';
import { MailComposeMessage } from '../types/mail.compose.message';

export class MailComposeMessageModel extends BaseModel<MailComposeMessage> {
  protected readonly model = 'mail.compose.message';
}
