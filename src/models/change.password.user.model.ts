import { BaseModel } from '../BaseModel';
import { ChangePasswordUser } from '../types/change.password.user';

export class ChangePasswordUserModel extends BaseModel<ChangePasswordUser> {
  protected readonly model = 'change.password.user';
}
