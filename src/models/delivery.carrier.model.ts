import { BaseModel } from '../BaseModel';
import { DeliveryCarrier } from '../types/delivery.carrier';

export class DeliveryCarrierModel extends BaseModel<DeliveryCarrier> {
  protected readonly model = 'delivery.carrier';
}
