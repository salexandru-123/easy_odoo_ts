import { BaseModel } from '../BaseModel';
import { StockReturnPicking } from '../types/stock.return.picking';

export class StockReturnPickingModel extends BaseModel<StockReturnPicking> {
  protected readonly model = 'stock.return.picking';
}
