import { BaseModel } from '../BaseModel';
import { IrWebsocket } from '../types/ir.websocket';

export class IrWebsocketModel extends BaseModel<IrWebsocket> {
  protected readonly model = 'ir.websocket';
}
