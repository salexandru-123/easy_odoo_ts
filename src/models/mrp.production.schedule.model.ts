import { BaseModel } from '../BaseModel';
import { MrpProductionSchedule } from '../types/mrp.production.schedule';

export class MrpProductionScheduleModel extends BaseModel<MrpProductionSchedule> {
  protected readonly model = 'mrp.production.schedule';
}
