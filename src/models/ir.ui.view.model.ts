import { BaseModel } from '../BaseModel';
import { IrUiView } from '../types/ir.ui.view';

export class IrUiViewModel extends BaseModel<IrUiView> {
  protected readonly model = 'ir.ui.view';
}
