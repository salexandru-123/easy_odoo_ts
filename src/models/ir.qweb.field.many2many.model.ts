import { BaseModel } from '../BaseModel';
import { IrQwebFieldManyMany } from '../types/ir.qweb.field.many2many';

export class IrQwebFieldManyManyModel extends BaseModel<IrQwebFieldManyMany> {
  protected readonly model = 'ir.qweb.field.many2many';
}
