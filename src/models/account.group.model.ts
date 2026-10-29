import { BaseModel } from '../BaseModel';
import { AccountGroup } from '../types/account.group';

export class AccountGroupModel extends BaseModel<AccountGroup> {
  protected readonly model = 'account.group';
}
