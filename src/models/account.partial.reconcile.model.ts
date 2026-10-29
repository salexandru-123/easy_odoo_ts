import { BaseModel } from '../BaseModel';
import { AccountPartialReconcile } from '../types/account.partial.reconcile';

export class AccountPartialReconcileModel extends BaseModel<AccountPartialReconcile> {
  protected readonly model = 'account.partial.reconcile';
}
