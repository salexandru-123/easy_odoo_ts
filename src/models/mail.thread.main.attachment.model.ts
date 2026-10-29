import { BaseModel } from '../BaseModel';
import { MailThreadMainAttachment } from '../types/mail.thread.main.attachment';

export class MailThreadMainAttachmentModel extends BaseModel<MailThreadMainAttachment> {
  protected readonly model = 'mail.thread.main.attachment';
}
