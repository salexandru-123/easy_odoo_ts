import { BaseModel } from '../BaseModel';
import { StockPutawayRule } from '../types/stock.putaway.rule';

export class StockPutawayRuleModel extends BaseModel<StockPutawayRule> {
  protected readonly model = 'stock.putaway.rule';
}
