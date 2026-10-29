import { BaseModel } from '../BaseModel';
import { PaymentCaptureWizard } from '../types/payment.capture.wizard';

export class PaymentCaptureWizardModel extends BaseModel<PaymentCaptureWizard> {
  protected readonly model = 'payment.capture.wizard';
}
