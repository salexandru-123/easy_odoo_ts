import { BaseModel } from '../BaseModel';
import { StockLocation } from '../types/stock.location';

export class StockLocationModel extends BaseModel<StockLocation> {
  protected readonly model = 'stock.location';
}
