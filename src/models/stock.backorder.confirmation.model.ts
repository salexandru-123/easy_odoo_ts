import { BaseModel } from '../BaseModel';
import { StockBackorderConfirmation } from '../types/stock.backorder.confirmation';

export class StockBackorderConfirmationModel extends BaseModel<StockBackorderConfirmation> {
  protected readonly model = 'stock.backorder.confirmation';
}
