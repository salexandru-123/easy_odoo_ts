import { BaseModel } from '../BaseModel';
import { AccountReport } from '../types/account.report';

export class AccountReportModel extends BaseModel<AccountReport> {
  protected readonly model = 'account.report';
}
