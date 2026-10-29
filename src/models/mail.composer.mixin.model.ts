import { BaseModel } from '../BaseModel';
import { MailComposerMixin } from '../types/mail.composer.mixin';

export class MailComposerMixinModel extends BaseModel<MailComposerMixin> {
  protected readonly model = 'mail.composer.mixin';
}
