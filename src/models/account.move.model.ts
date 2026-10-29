import { BaseModel } from '../BaseModel';
import { AccountMove } from '../types/account.move';

export class AccountMoveModel extends BaseModel<AccountMove> {
  protected readonly model = 'account.move';
}
