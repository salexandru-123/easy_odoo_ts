import { BaseModel } from '../BaseModel';
import { AccountPayment } from '../types/account.payment';

export class AccountPaymentModel extends BaseModel<AccountPayment> {
  protected readonly model = 'account.payment';
}
