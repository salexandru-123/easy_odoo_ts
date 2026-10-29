import { BaseModel } from '../BaseModel';
import { AccountAnalyticAccount } from '../types/account.analytic.account';

export class AccountAnalyticAccountModel extends BaseModel<AccountAnalyticAccount> {
  protected readonly model = 'account.analytic.account';
}
