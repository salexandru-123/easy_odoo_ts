import { BaseModel } from '../BaseModel';
import { StockReplenishmentOption } from '../types/stock.replenishment.option';

export class StockReplenishmentOptionModel extends BaseModel<StockReplenishmentOption> {
  protected readonly model = 'stock.replenishment.option';
}
