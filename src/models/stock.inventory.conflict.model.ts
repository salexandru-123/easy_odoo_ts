import { BaseModel } from '../BaseModel';
import { StockInventoryConflict } from '../types/stock.inventory.conflict';

export class StockInventoryConflictModel extends BaseModel<StockInventoryConflict> {
  protected readonly model = 'stock.inventory.conflict';
}
