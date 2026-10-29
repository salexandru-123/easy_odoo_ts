import { BaseModel } from '../BaseModel';
import { ResConfig } from '../types/res.config';

export class ResConfigModel extends BaseModel<ResConfig> {
  protected readonly model = 'res.config';
}
