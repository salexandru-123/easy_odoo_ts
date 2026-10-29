import { BaseModel } from '../BaseModel';
import { ExtractMixin } from '../types/extract.mixin';

export class ExtractMixinModel extends BaseModel<ExtractMixin> {
  protected readonly model = 'extract.mixin';
}
