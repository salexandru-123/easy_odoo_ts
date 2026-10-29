import { BaseModel } from '../BaseModel';
import { AccountInvoiceReport } from '../types/account.invoice.report';

export class AccountInvoiceReportModel extends BaseModel<AccountInvoiceReport> {
  protected readonly model = 'account.invoice.report';
}
