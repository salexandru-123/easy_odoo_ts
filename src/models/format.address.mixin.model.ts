import { BaseModel } from '../BaseModel';
import { FormatAddressMixin } from '../types/format.address.mixin';

export class FormatAddressMixinModel extends BaseModel<FormatAddressMixin> {
  protected readonly model = 'format.address.mixin';
}
