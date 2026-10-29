import { BaseModel } from '../BaseModel';
import { AccountMoveLine } from '../types/account.move.line';

export class AccountMoveLineModel extends BaseModel<AccountMoveLine> {
  protected readonly model = 'account.move.line';
}
