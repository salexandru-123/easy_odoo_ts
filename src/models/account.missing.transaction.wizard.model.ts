import { BaseModel } from '../BaseModel';
import { AccountMissingTransactionWizard } from '../types/account.missing.transaction.wizard';

export class AccountMissingTransactionWizardModel extends BaseModel<AccountMissingTransactionWizard> {
  protected readonly model = 'account.missing.transaction.wizard';
}
