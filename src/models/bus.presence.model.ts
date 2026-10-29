import { BaseModel } from '../BaseModel';
import { BusPresence } from '../types/bus.presence';

export class BusPresenceModel extends BaseModel<BusPresence> {
  protected readonly model = 'bus.presence';
}
