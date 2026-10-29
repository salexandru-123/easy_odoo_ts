import { BaseModel } from '../BaseModel';
import { MailWizardInvite } from '../types/mail.wizard.invite';

export class MailWizardInviteModel extends BaseModel<MailWizardInvite> {
  protected readonly model = 'mail.wizard.invite';
}
