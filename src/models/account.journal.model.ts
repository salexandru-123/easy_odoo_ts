import { BaseModel } from '../BaseModel';
import { AccountJournal } from '../types/account.journal';

export class AccountJournalModel extends BaseModel<AccountJournal> {
  protected readonly model = 'account.journal';
}
