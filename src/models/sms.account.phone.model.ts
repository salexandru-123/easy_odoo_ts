import { BaseModel } from '../BaseModel';
import { SmsAccountPhone } from '../types/sms.account.phone';

export class SmsAccountPhoneModel extends BaseModel<SmsAccountPhone> {
  protected readonly model = 'sms.account.phone';
}
