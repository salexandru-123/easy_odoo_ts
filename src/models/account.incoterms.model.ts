import { BaseModel } from '../BaseModel';
import { AccountIncoterms } from '../types/account.incoterms';

export class AccountIncotermsModel extends BaseModel<AccountIncoterms> {
  protected readonly model = 'account.incoterms';
}
