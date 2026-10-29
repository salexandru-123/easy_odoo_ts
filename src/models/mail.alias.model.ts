import { BaseModel } from '../BaseModel';
import { MailAlias } from '../types/mail.alias';

export class MailAliasModel extends BaseModel<MailAlias> {
  protected readonly model = 'mail.alias';
}
