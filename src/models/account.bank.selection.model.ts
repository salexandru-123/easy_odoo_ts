import { BaseModel } from '../BaseModel';
import { AccountBankSelection } from '../types/account.bank.selection';

export class AccountBankSelectionModel extends BaseModel<AccountBankSelection> {
  protected readonly model = 'account.bank.selection';
}
