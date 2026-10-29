import { BaseModel } from '../BaseModel';
import { AccountDebitNote } from '../types/account.debit.note';

export class AccountDebitNoteModel extends BaseModel<AccountDebitNote> {
  protected readonly model = 'account.debit.note';
}
