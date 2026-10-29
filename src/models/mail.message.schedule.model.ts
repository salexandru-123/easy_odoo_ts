import { BaseModel } from '../BaseModel';
import { MailMessageSchedule } from '../types/mail.message.schedule';

export class MailMessageScheduleModel extends BaseModel<MailMessageSchedule> {
  protected readonly model = 'mail.message.schedule';
}
