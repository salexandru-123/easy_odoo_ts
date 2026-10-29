import { BaseModel } from '../BaseModel';
import { HrExpenseSheet } from '../types/hr.expense.sheet';

export class HrExpenseSheetModel extends BaseModel<HrExpenseSheet> {
  protected readonly model = 'hr.expense.sheet';
}
