import { BaseModel } from '../BaseModel';
import { AccountImportSummary } from '../types/account.import.summary';

export class AccountImportSummaryModel extends BaseModel<AccountImportSummary> {
  protected readonly model = 'account.import.summary';
}
