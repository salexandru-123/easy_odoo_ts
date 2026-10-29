import { BaseModel } from '../BaseModel';
import { IapAccount } from '../types/iap.account';

export class IapAccountModel extends BaseModel<IapAccount> {
  protected readonly model = 'iap.account';
}
