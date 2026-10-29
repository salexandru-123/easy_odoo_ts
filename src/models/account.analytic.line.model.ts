import { BaseModel } from '../BaseModel';
import { AccountAnalyticLine } from '../types/account.analytic.line';

export class AccountAnalyticLineModel extends BaseModel<AccountAnalyticLine> {
  protected readonly model = 'account.analytic.line';
}
