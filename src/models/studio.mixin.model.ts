import { BaseModel } from '../BaseModel';
import { StudioMixin } from '../types/studio.mixin';

export class StudioMixinModel extends BaseModel<StudioMixin> {
  protected readonly model = 'studio.mixin';
}
