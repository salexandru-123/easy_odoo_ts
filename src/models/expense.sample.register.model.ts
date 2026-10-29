import { BaseModel } from '../BaseModel';
import { ExpenseSampleRegister } from '../types/expense.sample.register';

export class ExpenseSampleRegisterModel extends BaseModel<ExpenseSampleRegister> {
  protected readonly model = 'expense.sample.register';
}
