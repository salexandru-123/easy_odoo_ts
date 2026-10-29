import { BaseModel } from '../BaseModel';
import { MailLinkPreview } from '../types/mail.link.preview';

export class MailLinkPreviewModel extends BaseModel<MailLinkPreview> {
  protected readonly model = 'mail.link.preview';
}
