import { BaseModel } from '../BaseModel';
import { Unknown } from '../types/_unknown';

export class UnknownModel extends BaseModel<Unknown> {
  protected readonly model = '_unknown';
}
