import { BaseModel } from '../BaseModel';
import { ResourceResource } from '../types/resource.resource';

export class ResourceResourceModel extends BaseModel<ResourceResource> {
  protected readonly model = 'resource.resource';
}
