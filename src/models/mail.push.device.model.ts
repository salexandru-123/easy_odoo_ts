import { BaseModel } from '../BaseModel';
import { MailPushDevice } from '../types/mail.push.device';

export class MailPushDeviceModel extends BaseModel<MailPushDevice> {
  protected readonly model = 'mail.push.device';
}
