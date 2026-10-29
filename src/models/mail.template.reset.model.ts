import { BaseModel } from '../BaseModel';
import { MailTemplateReset } from '../types/mail.template.reset';

export class MailTemplateResetModel extends BaseModel<MailTemplateReset> {
  protected readonly model = 'mail.template.reset';
}
