import { BaseModel } from '../BaseModel';
import { IrModelConstraint } from '../types/ir.model.constraint';

export class IrModelConstraintModel extends BaseModel<IrModelConstraint> {
  protected readonly model = 'ir.model.constraint';
}
