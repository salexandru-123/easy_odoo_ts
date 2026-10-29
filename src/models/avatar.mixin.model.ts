import { BaseModel } from '../BaseModel';
import { AvatarMixin } from '../types/avatar.mixin';

export class AvatarMixinModel extends BaseModel<AvatarMixin> {
  protected readonly model = 'avatar.mixin';
}
