import { BaseModel } from '../BaseModel';
import { SignLog } from '../types/sign.log';

export class SignLogModel extends BaseModel<SignLog> {
  protected readonly model = 'sign.log';
}
