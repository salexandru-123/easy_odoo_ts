import { BaseModel } from '../BaseModel';
import { MailMessageReaction } from '../types/mail.message.reaction';

export class MailMessageReactionModel extends BaseModel<MailMessageReaction> {
  protected readonly model = 'mail.message.reaction';
}
