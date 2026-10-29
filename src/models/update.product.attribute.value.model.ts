import { BaseModel } from '../BaseModel';
import { UpdateProductAttributeValue } from '../types/update.product.attribute.value';

export class UpdateProductAttributeValueModel extends BaseModel<UpdateProductAttributeValue> {
  protected readonly model = 'update.product.attribute.value';
}
