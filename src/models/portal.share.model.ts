import { BaseModel } from '../BaseModel';
import { PortalShare } from '../types/portal.share';

export class PortalShareModel extends BaseModel<PortalShare> {
  protected readonly model = 'portal.share';
}
