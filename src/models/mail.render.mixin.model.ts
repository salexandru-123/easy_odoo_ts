import { BaseModel } from '../BaseModel';
import { MailRenderMixin } from '../types/mail.render.mixin';

export class MailRenderMixinModel extends BaseModel<MailRenderMixin> {
  protected readonly model = 'mail.render.mixin';
}
