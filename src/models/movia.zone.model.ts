import { BaseModel } from '../BaseModel';
import { MoviaZone } from '../types/movia.zone';

export class MoviaZoneModel extends BaseModel<MoviaZone> {
  protected readonly model = 'movia.zone';
}
