import { BaseModel } from '../BaseModel';
import { PaymentMethod } from '../types/payment.method';

export class PaymentMethodModel extends BaseModel<PaymentMethod> {
  protected readonly model = 'payment.method';
}
