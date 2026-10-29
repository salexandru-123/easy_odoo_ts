import { BaseModel } from '../BaseModel';
import { StockChangeProductQty } from '../types/stock.change.product.qty';

export class StockChangeProductQtyModel extends BaseModel<StockChangeProductQty> {
  protected readonly model = 'stock.change.product.qty';
}
