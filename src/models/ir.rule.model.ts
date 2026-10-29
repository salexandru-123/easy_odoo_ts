import { BaseModel } from '../BaseModel';
import { IrRule } from '../types/ir.rule';

export class IrRuleModel extends BaseModel<IrRule> {
  protected readonly model = 'ir.rule';
}
