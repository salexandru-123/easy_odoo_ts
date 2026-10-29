import { BaseModel } from '../BaseModel';
import { ProductAttribute } from '../types/product.attribute';

export class ProductAttributeModel extends BaseModel<ProductAttribute> {
  protected readonly model = 'product.attribute';
}
