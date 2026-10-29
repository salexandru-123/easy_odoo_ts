import { BaseModel } from '../BaseModel';
import { PhoneBlacklistRemove } from '../types/phone.blacklist.remove';

export class PhoneBlacklistRemoveModel extends BaseModel<PhoneBlacklistRemove> {
  protected readonly model = 'phone.blacklist.remove';
}
