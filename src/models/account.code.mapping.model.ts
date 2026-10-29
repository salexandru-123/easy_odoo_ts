import { BaseModel } from '../BaseModel';
import { AccountCodeMapping } from '../types/account.code.mapping';

export class AccountCodeMappingModel extends BaseModel<AccountCodeMapping> {
  protected readonly model = 'account.code.mapping';
}
