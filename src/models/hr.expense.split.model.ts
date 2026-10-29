import { BaseModel } from '../BaseModel';
import { HrExpenseSplit } from '../types/hr.expense.split';

export class HrExpenseSplitModel extends BaseModel<HrExpenseSplit> {
  protected readonly model = 'hr.expense.split';
}
