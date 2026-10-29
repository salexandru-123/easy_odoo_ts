import { BaseModel } from '../BaseModel';
import { UtmSource } from '../types/utm.source';

export class UtmSourceModel extends BaseModel<UtmSource> {
  protected readonly model = 'utm.source';
}
