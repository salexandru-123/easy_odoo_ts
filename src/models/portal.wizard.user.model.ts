import { BaseModel } from '../BaseModel';
import { PortalWizardUser } from '../types/portal.wizard.user';

export class PortalWizardUserModel extends BaseModel<PortalWizardUser> {
  protected readonly model = 'portal.wizard.user';
}
