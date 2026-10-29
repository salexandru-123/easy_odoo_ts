import { BaseModel } from '../BaseModel';
import { MailActivityPlan } from '../types/mail.activity.plan';

export class MailActivityPlanModel extends BaseModel<MailActivityPlan> {
  protected readonly model = 'mail.activity.plan';
}
