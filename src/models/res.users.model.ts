import { BaseModel } from '../BaseModel';
import { ResUsers } from '../types/res.users';

export class ResUsersModel extends BaseModel<ResUsers> {
  protected readonly model = 'res.users';
}
