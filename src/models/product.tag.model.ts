import { BaseModel } from '../BaseModel';
import { ProductTag } from '../types/product.tag';

export class ProductTagModel extends BaseModel<ProductTag> {
  protected readonly model = 'product.tag';
}
