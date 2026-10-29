import { BaseModel } from '../BaseModel';
import { IapService } from '../types/iap.service';

export class IapServiceModel extends BaseModel<IapService> {
  protected readonly model = 'iap.service';
}
