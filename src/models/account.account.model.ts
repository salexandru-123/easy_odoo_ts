import { BaseModel } from '../BaseModel';
import { AccountAccount } from '../types/account.account';

export class AccountAccountModel extends BaseModel<AccountAccount> {
  protected readonly model = 'account.account';
}
