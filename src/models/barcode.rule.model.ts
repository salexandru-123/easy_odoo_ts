import { BaseModel } from '../BaseModel';
import { BarcodeRule } from '../types/barcode.rule';

export class BarcodeRuleModel extends BaseModel<BarcodeRule> {
  protected readonly model = 'barcode.rule';
}
