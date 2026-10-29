import { BaseModel } from '../BaseModel';
import { AccountRoot } from '../types/account.root';

export class AccountRootModel extends BaseModel<AccountRoot> {
  protected readonly model = 'account.root';
}
