import { BaseModel } from '../BaseModel';
import { MailTemplate } from '../types/mail.template';

export class MailTemplateModel extends BaseModel<MailTemplate> {
  protected readonly model = 'mail.template';
}
