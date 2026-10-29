import { BaseModel } from '../BaseModel';
import { SmsResendRecipient } from '../types/sms.resend.recipient';

export class SmsResendRecipientModel extends BaseModel<SmsResendRecipient> {
  protected readonly model = 'sms.resend.recipient';
}
