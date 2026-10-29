import { BaseModel } from '../BaseModel';
import { ProductReplenish } from '../types/product.replenish';

export class ProductReplenishModel extends BaseModel<ProductReplenish> {
  protected readonly model = 'product.replenish';
}
