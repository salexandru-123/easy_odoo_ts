import { BaseModel } from '../BaseModel';
import { ResourceMixin } from '../types/resource.mixin';

export class ResourceMixinModel extends BaseModel<ResourceMixin> {
  protected readonly model = 'resource.mixin';
}
