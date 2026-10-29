import { BaseModel } from '../BaseModel';
import { ProductCombo } from '../types/product.combo';

export class ProductComboModel extends BaseModel<ProductCombo> {
  protected readonly model = 'product.combo';
}
