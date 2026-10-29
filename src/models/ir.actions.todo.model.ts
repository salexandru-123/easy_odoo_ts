import { BaseModel } from '../BaseModel';
import { IrActionsTodo } from '../types/ir.actions.todo';

export class IrActionsTodoModel extends BaseModel<IrActionsTodo> {
  protected readonly model = 'ir.actions.todo';
}
