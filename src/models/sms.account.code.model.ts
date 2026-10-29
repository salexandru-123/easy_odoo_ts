import { BaseModel } from '../BaseModel';
import { SmsAccountCode } from '../types/sms.account.code';

export class SmsAccountCodeModel extends BaseModel<SmsAccountCode> {
  protected readonly model = 'sms.account.code';
}
