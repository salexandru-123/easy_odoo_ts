import { BaseModel } from '../BaseModel';
import { StockWarehouseOrderpoint } from '../types/stock.warehouse.orderpoint';

export class StockWarehouseOrderpointModel extends BaseModel<StockWarehouseOrderpoint> {
  protected readonly model = 'stock.warehouse.orderpoint';
}
