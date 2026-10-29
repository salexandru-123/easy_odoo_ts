import { BaseModel } from '../BaseModel';
import { StockRequestCount } from '../types/stock.request.count';

export class StockRequestCountModel extends BaseModel<StockRequestCount> {
  protected readonly model = 'stock.request.count';
}
