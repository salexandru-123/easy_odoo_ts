import { BaseModel } from '../BaseModel';
import { IrCron } from '../types/ir.cron';

export class IrCronModel extends BaseModel<IrCron> {
  protected readonly model = 'ir.cron';
}
