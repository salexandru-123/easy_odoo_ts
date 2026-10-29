import { BaseModel } from '../BaseModel';
import { StockMove } from '../types/stock.move';

export class StockMoveModel extends BaseModel<StockMove> {
  protected readonly model = 'stock.move';
}
