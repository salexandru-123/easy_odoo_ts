import { BaseModel } from '../BaseModel';
import { PaymentRefundWizard } from '../types/payment.refund.wizard';

export class PaymentRefundWizardModel extends BaseModel<PaymentRefundWizard> {
  protected readonly model = 'payment.refund.wizard';
}
