import { BaseModel } from '../BaseModel';
import { DeliveryPriceRule } from '../types/delivery.price.rule';

export class DeliveryPriceRuleModel extends BaseModel<DeliveryPriceRule> {
  protected readonly model = 'delivery.price.rule';
}
