import { BaseModel } from '../BaseModel';
import { GoogleGmailMixin } from '../types/google.gmail.mixin';

export class GoogleGmailMixinModel extends BaseModel<GoogleGmailMixin> {
  protected readonly model = 'google.gmail.mixin';
}
