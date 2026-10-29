import { BaseModel } from '../BaseModel';
import { MailActivitySchedule } from '../types/mail.activity.schedule';

export class MailActivityScheduleModel extends BaseModel<MailActivitySchedule> {
  protected readonly model = 'mail.activity.schedule';
}
