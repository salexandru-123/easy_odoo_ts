import { BaseModel } from '../BaseModel';
import { ProductProduct } from '../types/product.product';

export class ProductProductModel extends BaseModel<ProductProduct> {
  protected readonly model = 'product.product';
}
