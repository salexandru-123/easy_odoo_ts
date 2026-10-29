import { BaseModel } from '../BaseModel';
import { StockWarehouse } from '../types/stock.warehouse';

export class StockWarehouseModel extends BaseModel<StockWarehouse> {
  protected readonly model = 'stock.warehouse';
}
