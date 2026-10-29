import { BaseModel } from '../BaseModel';
import { RatingParentMixin } from '../types/rating.parent.mixin';

export class RatingParentMixinModel extends BaseModel<RatingParentMixin> {
  protected readonly model = 'rating.parent.mixin';
}
