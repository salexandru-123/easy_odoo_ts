import { BaseModel } from '../BaseModel';
import { MailAliasDomain } from '../types/mail.alias.domain';

export class MailAliasDomainModel extends BaseModel<MailAliasDomain> {
  protected readonly model = 'mail.alias.domain';
}
