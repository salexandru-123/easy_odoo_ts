import { BaseModel } from '../BaseModel';
import { ResUsersDeletion } from '../types/res.users.deletion';

export class ResUsersDeletionModel extends BaseModel<ResUsersDeletion> {
  protected readonly model = 'res.users.deletion';
}
