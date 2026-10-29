import { BaseModel } from '../BaseModel';
import { PlanningRecurrency } from '../types/planning.recurrency';

export class PlanningRecurrencyModel extends BaseModel<PlanningRecurrency> {
  protected readonly model = 'planning.recurrency';
}
