import { BaseModel } from '../BaseModel';
import { AccountPaymentTermLine } from '../types/account.payment.term.line';

export class AccountPaymentTermLineModel extends BaseModel<AccountPaymentTermLine> {
  protected readonly model = 'account.payment.term.line';
}
