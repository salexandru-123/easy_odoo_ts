import { BaseModel } from '../BaseModel';
import { DecimalPrecision } from '../types/decimal.precision';

export class DecimalPrecisionModel extends BaseModel<DecimalPrecision> {
  protected readonly model = 'decimal.precision';
}
