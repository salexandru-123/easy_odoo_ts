import { BaseModel } from '../BaseModel';
import { AnalyticMixin } from '../types/analytic.mixin';

export class AnalyticMixinModel extends BaseModel<AnalyticMixin> {
  protected readonly model = 'analytic.mixin';
}
