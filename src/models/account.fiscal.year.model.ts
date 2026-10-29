import { BaseModel } from '../BaseModel';
import { AccountFiscalYear } from '../types/account.fiscal.year';

export class AccountFiscalYearModel extends BaseModel<AccountFiscalYear> {
  protected readonly model = 'account.fiscal.year';
}
