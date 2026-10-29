import { BaseModel } from '../BaseModel';
import { AccountMoveReversal } from '../types/account.move.reversal';

export class AccountMoveReversalModel extends BaseModel<AccountMoveReversal> {
  protected readonly model = 'account.move.reversal';
}
