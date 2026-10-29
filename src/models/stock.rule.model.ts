import { BaseModel } from '../BaseModel';
import { StockRule } from '../types/stock.rule';

export class StockRuleModel extends BaseModel<StockRule> {
  protected readonly model = 'stock.rule';
}
