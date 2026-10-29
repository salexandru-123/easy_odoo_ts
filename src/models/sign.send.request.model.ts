import { BaseModel } from '../BaseModel';
import { SignSendRequest } from '../types/sign.send.request';

export class SignSendRequestModel extends BaseModel<SignSendRequest> {
  protected readonly model = 'sign.send.request';
}
