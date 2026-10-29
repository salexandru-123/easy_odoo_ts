import { BaseModel } from '../BaseModel';
import { ProductTemplate } from '../types/product.template';

export class ProductTemplateModel extends BaseModel<ProductTemplate> {
  protected readonly model = 'product.template';
}
