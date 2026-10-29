import { BaseModel } from '../BaseModel';
import { AccountBatchPaymentRejection } from '../types/account.batch.payment.rejection';

export class AccountBatchPaymentRejectionModel extends BaseModel<AccountBatchPaymentRejection> {
  protected readonly model = 'account.batch.payment.rejection';
}
