import { BaseModel } from '../BaseModel';
import { MrpProduction } from '../types/mrp.production';

export class MrpProductionModel extends BaseModel<MrpProduction> {
  protected readonly model = 'mrp.production';
}
