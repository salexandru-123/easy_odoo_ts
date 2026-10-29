import { BaseModel } from '../BaseModel';
import { AccountBankStatement } from '../types/account.bank.statement';

export class AccountBankStatementModel extends BaseModel<AccountBankStatement> {
  protected readonly model = 'account.bank.statement';
}
