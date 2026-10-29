import { BaseModel } from '../BaseModel';
import { StockStorageCategory } from '../types/stock.storage.category';

export class StockStorageCategoryModel extends BaseModel<StockStorageCategory> {
  protected readonly model = 'stock.storage.category';
}
