import { BaseModel } from '../BaseModel';
import { AnalyticPlanFieldsMixin } from '../types/analytic.plan.fields.mixin';

export class AnalyticPlanFieldsMixinModel extends BaseModel<AnalyticPlanFieldsMixin> {
  protected readonly model = 'analytic.plan.fields.mixin';
}
