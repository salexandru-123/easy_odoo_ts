import { BaseModel } from '../BaseModel';
import { MrpProductionBackorderLine } from '../types/mrp.production.backorder.line';

export class MrpProductionBackorderLineModel extends BaseModel<MrpProductionBackorderLine> {
  protected readonly model = 'mrp.production.backorder.line';
}
