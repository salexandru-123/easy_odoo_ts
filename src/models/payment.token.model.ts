import { BaseModel } from '../BaseModel';
import { PaymentToken } from '../types/payment.token';

export class PaymentTokenModel extends BaseModel<PaymentToken> {
  protected readonly model = 'payment.token';
}
