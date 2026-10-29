import { BaseModel } from '../BaseModel';
import { StockQuantityHistory } from '../types/stock.quantity.history';

export class StockQuantityHistoryModel extends BaseModel<StockQuantityHistory> {
  protected readonly model = 'stock.quantity.history';
}
