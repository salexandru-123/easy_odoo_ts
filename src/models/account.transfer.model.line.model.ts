import { BaseModel } from '../BaseModel';
import { AccountTransferModelLine } from '../types/account.transfer.model.line';

export class AccountTransferModelLineModel extends BaseModel<AccountTransferModelLine> {
  protected readonly model = 'account.transfer.model.line';
}
