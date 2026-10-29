import { BaseModel } from '../BaseModel';
import { ResConfigSettings } from '../types/res.config.settings';

export class ResConfigSettingsModel extends BaseModel<ResConfigSettings> {
  protected readonly model = 'res.config.settings';
}
