import { BaseModel } from '../BaseModel';
import { ProductComboItem } from '../types/product.combo.item';

export class ProductComboItemModel extends BaseModel<ProductComboItem> {
  protected readonly model = 'product.combo.item';
}
