import { BaseModel } from '../BaseModel';
import { ExpenseSampleReceipt } from '../types/expense.sample.receipt';

export class ExpenseSampleReceiptModel extends BaseModel<ExpenseSampleReceipt> {
  protected readonly model = 'expense.sample.receipt';
}
