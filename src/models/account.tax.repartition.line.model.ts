import { BaseModel } from '../BaseModel';
import { AccountTaxRepartitionLine } from '../types/account.tax.repartition.line';

export class AccountTaxRepartitionLineModel extends BaseModel<AccountTaxRepartitionLine> {
  protected readonly model = 'account.tax.repartition.line';
}
