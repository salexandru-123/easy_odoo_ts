import { BaseModel } from '../BaseModel';
import { AccountInvoiceExtractWords } from '../types/account.invoice_extract.words';

export class AccountInvoiceExtractWordsModel extends BaseModel<AccountInvoiceExtractWords> {
  protected readonly model = 'account.invoice_extract.words';
}
