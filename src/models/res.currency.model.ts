import { BaseModel } from '../BaseModel';
import { ResCurrency } from '../types/res.currency';

export class ResCurrencyModel extends BaseModel<ResCurrency> {
  protected readonly model = 'res.currency';
}
