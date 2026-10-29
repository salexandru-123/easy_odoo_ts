import { BaseModel } from '../BaseModel';
import { MailActivityType } from '../types/mail.activity.type';

export class MailActivityTypeModel extends BaseModel<MailActivityType> {
  protected readonly model = 'mail.activity.type';
}
