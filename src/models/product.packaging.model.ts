import { BaseModel } from '../BaseModel';
import { ProductPackaging } from '../types/product.packaging';

export class ProductPackagingModel extends BaseModel<ProductPackaging> {
  protected readonly model = 'product.packaging';
}
