import { BaseModel } from '../BaseModel';
import { PaymentProvider } from '../types/payment.provider';

export class PaymentProviderModel extends BaseModel<PaymentProvider> {
  protected readonly model = 'payment.provider';
}
