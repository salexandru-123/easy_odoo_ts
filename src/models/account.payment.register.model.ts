import { BaseModel } from '../BaseModel';
import { AccountPaymentRegister } from '../types/account.payment.register';

export class AccountPaymentRegisterModel extends BaseModel<AccountPaymentRegister> {
  protected readonly model = 'account.payment.register';
}
