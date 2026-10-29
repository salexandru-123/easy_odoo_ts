import { BaseModel } from '../BaseModel';
import { AccountTax } from '../types/account.tax';

export class AccountTaxModel extends BaseModel<AccountTax> {
  protected readonly model = 'account.tax';
}
