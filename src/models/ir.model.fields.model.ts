import { BaseModel } from '../BaseModel';
import { IrModelFields } from '../types/ir.model.fields';

export class IrModelFieldsModel extends BaseModel<IrModelFields> {
  protected readonly model = 'ir.model.fields';
}
