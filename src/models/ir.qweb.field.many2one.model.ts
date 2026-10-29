import { BaseModel } from '../BaseModel';
import { IrQwebFieldManyOne } from '../types/ir.qweb.field.many2one';

export class IrQwebFieldManyOneModel extends BaseModel<IrQwebFieldManyOne> {
  protected readonly model = 'ir.qweb.field.many2one';
}
