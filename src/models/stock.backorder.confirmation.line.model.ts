import { BaseModel } from '../BaseModel';
import { StockBackorderConfirmationLine } from '../types/stock.backorder.confirmation.line';

export class StockBackorderConfirmationLineModel extends BaseModel<StockBackorderConfirmationLine> {
  protected readonly model = 'stock.backorder.confirmation.line';
}
