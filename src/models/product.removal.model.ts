import { BaseModel } from '../BaseModel';
import { ProductRemoval } from '../types/product.removal';

export class ProductRemovalModel extends BaseModel<ProductRemoval> {
  protected readonly model = 'product.removal';
}
