import { BaseModel } from '../BaseModel';
import { StockLot } from '../types/stock.lot';

export class StockLotModel extends BaseModel<StockLot> {
  protected readonly model = 'stock.lot';
}
