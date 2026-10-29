import { BaseModel } from '../BaseModel';
import { AccountReportColumn } from '../types/account.report.column';

export class AccountReportColumnModel extends BaseModel<AccountReportColumn> {
  protected readonly model = 'account.report.column';
}
