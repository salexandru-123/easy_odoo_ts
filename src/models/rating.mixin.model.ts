import { BaseModel } from '../BaseModel';
import { RatingMixin } from '../types/rating.mixin';

export class RatingMixinModel extends BaseModel<RatingMixin> {
  protected readonly model = 'rating.mixin';
}
