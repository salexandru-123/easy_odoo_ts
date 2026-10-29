import { BaseModel } from '../BaseModel';
import { IrCronProgress } from '../types/ir.cron.progress';

export class IrCronProgressModel extends BaseModel<IrCronProgress> {
  protected readonly model = 'ir.cron.progress';
}
