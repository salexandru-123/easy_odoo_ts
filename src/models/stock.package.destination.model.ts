import { BaseModel } from '../BaseModel';
import { StockPackageDestination } from '../types/stock.package.destination';

export class StockPackageDestinationModel extends BaseModel<StockPackageDestination> {
  protected readonly model = 'stock.package.destination';
}
