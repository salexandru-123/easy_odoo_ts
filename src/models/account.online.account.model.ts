import { BaseModel } from '../BaseModel';
import { AccountOnlineAccount } from '../types/account.online.account';

export class AccountOnlineAccountModel extends BaseModel<AccountOnlineAccount> {
  protected readonly model = 'account.online.account';
}
