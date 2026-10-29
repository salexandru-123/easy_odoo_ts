import { BaseModel } from '../BaseModel';
import { StockDeliveryNoteLine } from '../types/stock.delivery.note.line';

export class StockDeliveryNoteLineModel extends BaseModel<StockDeliveryNoteLine> {
  protected readonly model = 'stock.delivery.note.line';
}
