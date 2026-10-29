import { BaseModel } from '../BaseModel';
import { ProductPricelist } from '../types/product.pricelist';

export class ProductPricelistModel extends BaseModel<ProductPricelist> {
  protected readonly model = 'product.pricelist';
}
