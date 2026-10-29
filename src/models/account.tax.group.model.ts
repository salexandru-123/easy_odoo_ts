import { BaseModel } from '../BaseModel';
import { AccountTaxGroup } from '../types/account.tax.group';

export class AccountTaxGroupModel extends BaseModel<AccountTaxGroup> {
  protected readonly model = 'account.tax.group';
}
