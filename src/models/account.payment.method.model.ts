import { BaseModel } from '../BaseModel';
import { AccountPaymentMethod } from '../types/account.payment.method';

export class AccountPaymentMethodModel extends BaseModel<AccountPaymentMethod> {
  protected readonly model = 'account.payment.method';
}
