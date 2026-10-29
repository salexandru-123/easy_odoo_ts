import { BaseModel } from '../BaseModel';
import { ShippingInformationUpdaterMixin } from '../types/shipping.information.updater.mixin';

export class ShippingInformationUpdaterMixinModel extends BaseModel<ShippingInformationUpdaterMixin> {
  protected readonly model = 'shipping.information.updater.mixin';
}
