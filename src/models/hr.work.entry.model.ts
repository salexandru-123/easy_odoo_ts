import { BaseModel } from '../BaseModel';
import { HrWorkEntry } from '../types/hr.work.entry';

export class HrWorkEntryModel extends BaseModel<HrWorkEntry> {
  protected readonly model = 'hr.work.entry';
}
