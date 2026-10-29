import { BaseModel } from '../BaseModel';
import { ProductCatalogMixin } from '../types/product.catalog.mixin';

export class ProductCatalogMixinModel extends BaseModel<ProductCatalogMixin> {
  protected readonly model = 'product.catalog.mixin';
}
