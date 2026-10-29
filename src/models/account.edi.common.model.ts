import { BaseModel } from '../BaseModel';
import { AccountEdiCommon } from '../types/account.edi.common';

export class AccountEdiCommonModel extends BaseModel<AccountEdiCommon> {
  protected readonly model = 'account.edi.common';
}
