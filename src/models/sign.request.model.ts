import { BaseModel } from '../BaseModel';
import { SignRequest } from '../types/sign.request';

export class SignRequestModel extends BaseModel<SignRequest> {
  protected readonly model = 'sign.request';
}
