import { BaseModel } from '../BaseModel';
import { HrWorkLocation } from '../types/hr.work.location';

export class HrWorkLocationModel extends BaseModel<HrWorkLocation> {
  protected readonly model = 'hr.work.location';
}
