import { BaseModel } from '../BaseModel';
import { AccountCashRounding } from '../types/account.cash.rounding';

export class AccountCashRoundingModel extends BaseModel<AccountCashRounding> {
  protected readonly model = 'account.cash.rounding';
}
