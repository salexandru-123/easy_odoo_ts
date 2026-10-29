import { BaseModel } from '../BaseModel';
import { SignRequestItem } from '../types/sign.request.item';

export class SignRequestItemModel extends BaseModel<SignRequestItem> {
  protected readonly model = 'sign.request.item';
}
