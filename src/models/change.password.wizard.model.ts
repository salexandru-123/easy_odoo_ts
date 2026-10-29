import { BaseModel } from '../BaseModel';
import { ChangePasswordWizard } from '../types/change.password.wizard';

export class ChangePasswordWizardModel extends BaseModel<ChangePasswordWizard> {
  protected readonly model = 'change.password.wizard';
}
