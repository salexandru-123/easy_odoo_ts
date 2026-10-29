import { BaseModel } from '../BaseModel';
import { StockPickingType } from '../types/stock.picking.type';

export class StockPickingTypeModel extends BaseModel<StockPickingType> {
  protected readonly model = 'stock.picking.type';
}
