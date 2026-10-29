import { BaseModel } from '../BaseModel';
import { StockReplenishMixin } from '../types/stock.replenish.mixin';

export class StockReplenishMixinModel extends BaseModel<StockReplenishMixin> {
  protected readonly model = 'stock.replenish.mixin';
}
