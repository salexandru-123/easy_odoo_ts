import { BaseModel } from '../BaseModel';
import { SequenceMixin } from '../types/sequence.mixin';

export class SequenceMixinModel extends BaseModel<SequenceMixin> {
  protected readonly model = 'sequence.mixin';
}
