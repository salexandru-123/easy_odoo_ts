import { BaseModel } from '../BaseModel';
import { StockRoute } from '../types/stock.route';

export class StockRouteModel extends BaseModel<StockRoute> {
  protected readonly model = 'stock.route';
}
