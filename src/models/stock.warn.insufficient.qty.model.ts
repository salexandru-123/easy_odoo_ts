import { BaseModel } from '../BaseModel';
import { StockWarnInsufficientQty } from '../types/stock.warn.insufficient.qty';

export class StockWarnInsufficientQtyModel extends BaseModel<StockWarnInsufficientQty> {
  protected readonly model = 'stock.warn.insufficient.qty';
}
