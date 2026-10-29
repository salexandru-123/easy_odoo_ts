import { BaseModel } from '../BaseModel';
import { IrMailServer } from '../types/ir.mail_server';

export class IrMailServerModel extends BaseModel<IrMailServer> {
  protected readonly model = 'ir.mail_server';
}
