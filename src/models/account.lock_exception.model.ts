import { BaseModel } from '../BaseModel';
import { AccountLockException } from '../types/account.lock_exception';

export class AccountLockExceptionModel extends BaseModel<AccountLockException> {
  protected readonly model = 'account.lock_exception';
}
