import { BaseModel } from '../BaseModel';
import { MoviaDevice } from '../types/movia.device';

export class MoviaDeviceModel extends BaseModel<MoviaDevice> {
  protected readonly model = 'movia.device';
}
