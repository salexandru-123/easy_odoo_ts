import { BaseModel } from '../BaseModel';
import { AccountMoveSendWizard } from '../types/account.move.send.wizard';

export class AccountMoveSendWizardModel extends BaseModel<AccountMoveSendWizard> {
  protected readonly model = 'account.move.send.wizard';
}
