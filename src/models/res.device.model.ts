import { BaseModel } from '../BaseModel';
import { ResDevice } from '../types/res.device';

export class ResDeviceModel extends BaseModel<ResDevice> {
  protected readonly model = 'res.device';
}
