import { BaseModel } from '../BaseModel';
import { PortalWizard } from '../types/portal.wizard';

export class PortalWizardModel extends BaseModel<PortalWizard> {
  protected readonly model = 'portal.wizard';
}
