import { BaseModel } from '../BaseModel';
import { AccountReconcileWizard } from '../types/account.reconcile.wizard';

export class AccountReconcileWizardModel extends BaseModel<AccountReconcileWizard> {
  protected readonly model = 'account.reconcile.wizard';
}
