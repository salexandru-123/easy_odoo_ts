import { BaseModel } from '../BaseModel';
import { StockPicking } from '../types/stock.picking';

export class StockPickingModel extends BaseModel<StockPicking> {
  protected readonly model = 'stock.picking';
}
