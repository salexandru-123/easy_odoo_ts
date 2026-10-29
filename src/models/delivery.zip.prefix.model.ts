import { BaseModel } from '../BaseModel';
import { DeliveryZipPrefix } from '../types/delivery.zip.prefix';

export class DeliveryZipPrefixModel extends BaseModel<DeliveryZipPrefix> {
  protected readonly model = 'delivery.zip.prefix';
}
