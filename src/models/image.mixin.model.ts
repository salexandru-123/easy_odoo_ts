import { BaseModel } from '../BaseModel';
import { ImageMixin } from '../types/image.mixin';

export class ImageMixinModel extends BaseModel<ImageMixin> {
  protected readonly model = 'image.mixin';
}
