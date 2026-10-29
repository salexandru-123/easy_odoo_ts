import { BaseModel } from '../BaseModel';
import { SignItem } from '../types/sign.item';

export class SignItemModel extends BaseModel<SignItem> {
  protected readonly model = 'sign.item';
}
