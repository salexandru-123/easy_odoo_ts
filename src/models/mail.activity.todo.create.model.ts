import { BaseModel } from '../BaseModel';
import { MailActivityTodoCreate } from '../types/mail.activity.todo.create';

export class MailActivityTodoCreateModel extends BaseModel<MailActivityTodoCreate> {
  protected readonly model = 'mail.activity.todo.create';
}
