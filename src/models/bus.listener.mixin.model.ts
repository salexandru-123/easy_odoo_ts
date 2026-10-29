import { BaseModel } from '../BaseModel';
import { BusListenerMixin } from '../types/bus.listener.mixin';

export class BusListenerMixinModel extends BaseModel<BusListenerMixin> {
  protected readonly model = 'bus.listener.mixin';
}
