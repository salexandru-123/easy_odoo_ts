import { BaseModel } from '../BaseModel';
import { SmsResend } from '../types/sms.resend';

export class SmsResendModel extends BaseModel<SmsResend> {
  protected readonly model = 'sms.resend';
}
