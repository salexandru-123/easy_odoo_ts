import { BaseModel } from '../BaseModel';
import { AuthTotpWizard } from '../types/auth_totp.wizard';

export class AuthTotpWizardModel extends BaseModel<AuthTotpWizard> {
  protected readonly model = 'auth_totp.wizard';
}
