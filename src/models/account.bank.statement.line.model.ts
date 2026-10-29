import { BaseModel } from '../BaseModel';
import { AccountBankStatementLine } from '../types/account.bank.statement.line';

export class AccountBankStatementLineModel extends BaseModel<AccountBankStatementLine> {
  protected readonly model = 'account.bank.statement.line';
}
