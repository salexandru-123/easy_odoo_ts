import { BaseModel } from '../BaseModel';
import { PortalMixin } from '../types/portal.mixin';

export class PortalMixinModel extends BaseModel<PortalMixin> {
  protected readonly model = 'portal.mixin';
}
