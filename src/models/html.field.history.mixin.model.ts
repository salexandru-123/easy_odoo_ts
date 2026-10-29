import { BaseModel } from '../BaseModel';
import { HtmlFieldHistoryMixin } from '../types/html.field.history.mixin';

export class HtmlFieldHistoryMixinModel extends BaseModel<HtmlFieldHistoryMixin> {
  protected readonly model = 'html.field.history.mixin';
}
