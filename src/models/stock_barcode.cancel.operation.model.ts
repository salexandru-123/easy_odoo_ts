import { BaseModel } from '../BaseModel';
import { StockBarcodeCancelOperation } from '../types/stock_barcode.cancel.operation';

export class StockBarcodeCancelOperationModel extends BaseModel<StockBarcodeCancelOperation> {
  protected readonly model = 'stock_barcode.cancel.operation';
}
