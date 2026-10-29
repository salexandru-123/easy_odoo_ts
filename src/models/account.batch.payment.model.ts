import { BaseModel } from '../BaseModel';
import { AccountBatchPayment } from '../types/account.batch.payment';

export class AccountBatchPaymentModel extends BaseModel<AccountBatchPayment> {
  protected readonly model = 'account.batch.payment';
}
