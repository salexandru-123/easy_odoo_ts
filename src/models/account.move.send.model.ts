import { BaseModel } from '../BaseModel';
import { AccountMoveSend } from '../types/account.move.send';

export class AccountMoveSendModel extends BaseModel<AccountMoveSend> {
  protected readonly model = 'account.move.send';
}
