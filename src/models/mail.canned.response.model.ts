import { BaseModel } from '../BaseModel';
import { MailCannedResponse } from '../types/mail.canned.response';

export class MailCannedResponseModel extends BaseModel<MailCannedResponse> {
  protected readonly model = 'mail.canned.response';
}
