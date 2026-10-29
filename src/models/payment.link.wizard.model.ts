import { BaseModel } from '../BaseModel';
import { PaymentLinkWizard } from '../types/payment.link.wizard';

export class PaymentLinkWizardModel extends BaseModel<PaymentLinkWizard> {
  protected readonly model = 'payment.link.wizard';
}
