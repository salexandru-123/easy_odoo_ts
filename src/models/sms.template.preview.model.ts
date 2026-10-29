import { BaseModel } from '../BaseModel';
import { SmsTemplatePreview } from '../types/sms.template.preview';

export class SmsTemplatePreviewModel extends BaseModel<SmsTemplatePreview> {
  protected readonly model = 'sms.template.preview';
}
