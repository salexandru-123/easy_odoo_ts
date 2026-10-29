import { BaseModel } from '../BaseModel';
import { MailMessageTranslation } from '../types/mail.message.translation';

export class MailMessageTranslationModel extends BaseModel<MailMessageTranslation> {
  protected readonly model = 'mail.message.translation';
}
