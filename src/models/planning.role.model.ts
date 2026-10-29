import { BaseModel } from '../BaseModel';
import { PlanningRole } from '../types/planning.role';

export class PlanningRoleModel extends BaseModel<PlanningRole> {
  protected readonly model = 'planning.role';
}
