import { BaseModel } from '../BaseModel';
import { QuotationDocument } from '../types/quotation.document';

export class QuotationDocumentModel extends BaseModel<QuotationDocument> {
  protected readonly model = 'quotation.document';
}
