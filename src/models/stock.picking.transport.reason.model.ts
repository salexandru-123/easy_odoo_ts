import { BaseModel } from '../BaseModel';
import { StockPickingTransportReason } from '../types/stock.picking.transport.reason';

export class StockPickingTransportReasonModel extends BaseModel<StockPickingTransportReason> {
  protected readonly model = 'stock.picking.transport.reason';
}
