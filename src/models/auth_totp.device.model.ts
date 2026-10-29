import { BaseModel } from '../BaseModel';
import { AuthTotpDevice } from '../types/auth_totp.device';

export class AuthTotpDeviceModel extends BaseModel<AuthTotpDevice> {
  protected readonly model = 'auth_totp.device';
}
