import { BaseModel } from '../BaseModel';
import { MrpBom } from '../types/mrp.bom';

export class MrpBomModel extends BaseModel<MrpBom> {
  protected readonly model = 'mrp.bom';
}
