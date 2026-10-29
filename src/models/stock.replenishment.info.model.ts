import { BaseModel } from '../BaseModel';
import { StockReplenishmentInfo } from '../types/stock.replenishment.info';

export class StockReplenishmentInfoModel extends BaseModel<StockReplenishmentInfo> {
  protected readonly model = 'stock.replenishment.info';
}
