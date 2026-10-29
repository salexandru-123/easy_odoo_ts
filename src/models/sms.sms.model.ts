import { BaseModel } from '../BaseModel';
import { SmsSms } from '../types/sms.sms';

export class SmsSmsModel extends BaseModel<SmsSms> {
  protected readonly model = 'sms.sms';
}
