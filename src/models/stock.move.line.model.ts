import { BaseModel } from '../BaseModel';
import { StockMoveLine } from '../types/stock.move.line';

export class StockMoveLineModel extends BaseModel<StockMoveLine> {
  protected readonly model = 'stock.move.line';
}
