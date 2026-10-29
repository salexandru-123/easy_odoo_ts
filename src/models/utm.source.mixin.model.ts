import { BaseModel } from '../BaseModel';
import { UtmSourceMixin } from '../types/utm.source.mixin';

export class UtmSourceMixinModel extends BaseModel<UtmSourceMixin> {
  protected readonly model = 'utm.source.mixin';
}
