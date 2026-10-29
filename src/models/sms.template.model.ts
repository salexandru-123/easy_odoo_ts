import { BaseModel } from '../BaseModel';
import { SmsTemplate } from '../types/sms.template';

export class SmsTemplateModel extends BaseModel<SmsTemplate> {
  protected readonly model = 'sms.template';
}
