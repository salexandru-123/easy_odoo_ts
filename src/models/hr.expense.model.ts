import { BaseModel } from '../BaseModel';
import { HrExpense } from '../types/hr.expense';

export class HrExpenseModel extends BaseModel<HrExpense> {
  protected readonly model = 'hr.expense';
}
