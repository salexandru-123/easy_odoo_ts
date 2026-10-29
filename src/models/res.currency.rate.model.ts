import { BaseModel } from '../BaseModel';
import { ResCurrencyRate } from '../types/res.currency.rate';

export class ResCurrencyRateModel extends BaseModel<ResCurrencyRate> {
  protected readonly model = 'res.currency.rate';
}
