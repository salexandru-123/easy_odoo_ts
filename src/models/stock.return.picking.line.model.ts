import { BaseModel } from '../BaseModel';
import { StockReturnPickingLine } from '../types/stock.return.picking.line';

export class StockReturnPickingLineModel extends BaseModel<StockReturnPickingLine> {
  protected readonly model = 'stock.return.picking.line';
}
