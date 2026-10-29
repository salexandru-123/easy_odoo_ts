import { BaseModel } from '../BaseModel';
import { ProductPricelistItem } from '../types/product.pricelist.item';

export class ProductPricelistItemModel extends BaseModel<ProductPricelistItem> {
  protected readonly model = 'product.pricelist.item';
}
