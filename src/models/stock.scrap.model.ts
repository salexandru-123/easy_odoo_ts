import { BaseModel } from '../BaseModel';
import { StockScrap } from '../types/stock.scrap';

export class StockScrapModel extends BaseModel<StockScrap> {
  protected readonly model = 'stock.scrap';
}
