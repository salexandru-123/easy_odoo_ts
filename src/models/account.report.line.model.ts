import { BaseModel } from '../BaseModel';
import { AccountReportLine } from '../types/account.report.line';

export class AccountReportLineModel extends BaseModel<AccountReportLine> {
  protected readonly model = 'account.report.line';
}
