import { BaseModel } from '../BaseModel';
import { MrpBomLine } from '../types/mrp.bom.line';

export class MrpBomLineModel extends BaseModel<MrpBomLine> {
  protected readonly model = 'mrp.bom.line';
}
