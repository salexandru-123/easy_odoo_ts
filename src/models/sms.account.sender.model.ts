import { BaseModel } from '../BaseModel';
import { SmsAccountSender } from '../types/sms.account.sender';

export class SmsAccountSenderModel extends BaseModel<SmsAccountSender> {
  protected readonly model = 'sms.account.sender';
}
