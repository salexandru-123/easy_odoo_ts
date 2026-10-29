import { BaseModel } from '../BaseModel';
import { ProductAttributeValue } from '../types/product.attribute.value';

export class ProductAttributeValueModel extends BaseModel<ProductAttributeValue> {
  protected readonly model = 'product.attribute.value';
}
