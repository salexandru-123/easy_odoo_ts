import { BaseModel } from '../BaseModel';
import { ChangePasswordOwn } from '../types/change.password.own';

export class ChangePasswordOwnModel extends BaseModel<ChangePasswordOwn> {
  protected readonly model = 'change.password.own';
}
