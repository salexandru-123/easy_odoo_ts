import { BaseModel } from '../BaseModel';
import { MailTemplatePreview } from '../types/mail.template.preview';

export class MailTemplatePreviewModel extends BaseModel<MailTemplatePreview> {
  protected readonly model = 'mail.template.preview';
}
