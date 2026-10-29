import { BaseModel } from '../BaseModel';
import { AccountPaymentTerm } from '../types/account.payment.term';

export class AccountPaymentTermModel extends BaseModel<AccountPaymentTerm> {
  protected readonly model = 'account.payment.term';
}
