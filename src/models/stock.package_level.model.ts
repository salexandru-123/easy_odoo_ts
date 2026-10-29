import { BaseModel } from '../BaseModel';
import { StockPackageLevel } from '../types/stock.package_level';

export class StockPackageLevelModel extends BaseModel<StockPackageLevel> {
  protected readonly model = 'stock.package_level';
}
