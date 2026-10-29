import { BaseModel } from '../BaseModel';
import { AccountJournalGroup } from '../types/account.journal.group';

export class AccountJournalGroupModel extends BaseModel<AccountJournalGroup> {
  protected readonly model = 'account.journal.group';
}
