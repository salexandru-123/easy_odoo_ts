import { BaseModel } from '../BaseModel';
import { PrivacyLog } from '../types/privacy.log';

export class PrivacyLogModel extends BaseModel<PrivacyLog> {
  protected readonly model = 'privacy.log';
}
