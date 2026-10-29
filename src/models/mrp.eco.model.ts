import { BaseModel } from '../BaseModel';
import { MrpEco } from '../types/mrp.eco';

export class MrpEcoModel extends BaseModel<MrpEco> {
  protected readonly model = 'mrp.eco';
}
