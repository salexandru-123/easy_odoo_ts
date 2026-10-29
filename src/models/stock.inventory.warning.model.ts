import { BaseModel } from '../BaseModel';
import { StockInventoryWarning } from '../types/stock.inventory.warning';

export class StockInventoryWarningModel extends BaseModel<StockInventoryWarning> {
  protected readonly model = 'stock.inventory.warning';
}
