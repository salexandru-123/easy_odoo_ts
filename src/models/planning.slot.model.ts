import { BaseModel } from '../BaseModel';
import { PlanningSlot } from '../types/planning.slot';

export class PlanningSlotModel extends BaseModel<PlanningSlot> {
  protected readonly model = 'planning.slot';
}
