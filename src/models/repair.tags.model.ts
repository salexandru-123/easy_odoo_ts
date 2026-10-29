import { BaseModel } from '../BaseModel';
import { RepairTags } from '../types/repair.tags';

export class RepairTagsModel extends BaseModel<RepairTags> {
  protected readonly model = 'repair.tags';
}
