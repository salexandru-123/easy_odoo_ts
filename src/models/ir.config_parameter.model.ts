import { BaseModel } from '../BaseModel';
import { IrConfigParameter } from '../types/ir.config_parameter';

export class IrConfigParameterModel extends BaseModel<IrConfigParameter> {
  protected readonly model = 'ir.config_parameter';
}
