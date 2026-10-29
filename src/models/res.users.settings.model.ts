import { BaseModel } from '../BaseModel';
import { ResUsersSettings } from '../types/res.users.settings';

export class ResUsersSettingsModel extends BaseModel<ResUsersSettings> {
  protected readonly model = 'res.users.settings';
}
