import { BaseModel } from '../BaseModel';
import { SmsTemplateReset } from '../types/sms.template.reset';

export class SmsTemplateResetModel extends BaseModel<SmsTemplateReset> {
  protected readonly model = 'sms.template.reset';
}
