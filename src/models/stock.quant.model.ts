import { BaseModel } from '../BaseModel';
import { StockQuant } from '../types/stock.quant';

export class StockQuantModel extends BaseModel<StockQuant> {
  protected readonly model = 'stock.quant';
}
