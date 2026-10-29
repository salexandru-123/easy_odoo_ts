import { BaseModel } from '../BaseModel';
import { StockDeliveryNote } from '../types/stock.delivery.note';

export class StockDeliveryNoteModel extends BaseModel<StockDeliveryNote> {
  protected readonly model = 'stock.delivery.note';
}
