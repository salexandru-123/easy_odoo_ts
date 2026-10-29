import { BaseModel } from '../BaseModel';
import { AccountPaymentMethodLine } from '../types/account.payment.method.line';

export class AccountPaymentMethodLineModel extends BaseModel<AccountPaymentMethodLine> {
  protected readonly model = 'account.payment.method.line';
}
