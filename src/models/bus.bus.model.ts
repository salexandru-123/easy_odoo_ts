import { BaseModel } from '../BaseModel';
import { BusBus } from '../types/bus.bus';

export class BusBusModel extends BaseModel<BusBus> {
  protected readonly model = 'bus.bus';
}
