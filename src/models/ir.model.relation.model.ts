import { BaseModel } from '../BaseModel';
import { IrModelRelation } from '../types/ir.model.relation';

export class IrModelRelationModel extends BaseModel<IrModelRelation> {
  protected readonly model = 'ir.model.relation';
}
