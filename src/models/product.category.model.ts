import { BaseModel } from '../BaseModel';
import { ProductCategory } from '../types/product.category';

export class ProductCategoryModel extends BaseModel<ProductCategory> {
  protected readonly model = 'product.category';
}
