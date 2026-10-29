import { BaseModel } from '../BaseModel';
import { PhoneBlacklist } from '../types/phone.blacklist';

export class PhoneBlacklistModel extends BaseModel<PhoneBlacklist> {
  protected readonly model = 'phone.blacklist';
}
