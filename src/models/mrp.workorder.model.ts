import { BaseModel } from '../BaseModel';
import { MrpWorkorder } from '../types/mrp.workorder';

export class MrpWorkorderModel extends BaseModel<MrpWorkorder> {
  protected readonly model = 'mrp.workorder';
}
