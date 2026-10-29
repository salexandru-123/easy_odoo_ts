import { BaseModel } from '../BaseModel';
import { PaymentTransaction } from '../types/payment.transaction';

export class PaymentTransactionModel extends BaseModel<PaymentTransaction> {
  protected readonly model = 'payment.transaction';
}
