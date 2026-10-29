import { BaseModel } from '../BaseModel';
import { IrCronTrigger } from '../types/ir.cron.trigger';

export class IrCronTriggerModel extends BaseModel<IrCronTrigger> {
  protected readonly model = 'ir.cron.trigger';
}
