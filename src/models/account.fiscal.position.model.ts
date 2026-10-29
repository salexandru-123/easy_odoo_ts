import { BaseModel } from '../BaseModel';
import { AccountFiscalPosition } from '../types/account.fiscal.position';

export class AccountFiscalPositionModel extends BaseModel<AccountFiscalPosition> {
  protected readonly model = 'account.fiscal.position';
}
