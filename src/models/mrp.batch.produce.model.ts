import { BaseModel } from '../BaseModel';
import { MrpBatchProduce } from '../types/mrp.batch.produce';

export class MrpBatchProduceModel extends BaseModel<MrpBatchProduce> {
  protected readonly model = 'mrp.batch.produce';
}
