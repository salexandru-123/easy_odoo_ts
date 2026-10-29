import { BaseModel } from '../BaseModel';
import { UtmMixin } from '../types/utm.mixin';

export class UtmMixinModel extends BaseModel<UtmMixin> {
  protected readonly model = 'utm.mixin';
}
