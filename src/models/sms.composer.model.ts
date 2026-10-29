import { BaseModel } from '../BaseModel';
import { SmsComposer } from '../types/sms.composer';

export class SmsComposerModel extends BaseModel<SmsComposer> {
  protected readonly model = 'sms.composer';
}
