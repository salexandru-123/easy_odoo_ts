import { BaseModel } from '../BaseModel';
import { ProductDocument } from '../types/product.document';

export class ProductDocumentModel extends BaseModel<ProductDocument> {
  protected readonly model = 'product.document';
}
