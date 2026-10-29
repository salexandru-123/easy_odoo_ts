import { BaseModel } from '../BaseModel';
import { IrHttp } from '../types/ir.http';

export class IrHttpModel extends BaseModel<IrHttp> {
  protected readonly model = 'ir.http';
}
