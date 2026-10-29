import { BaseModel } from '../BaseModel';
import { PeppolRegistration } from '../types/peppol.registration';

export class PeppolRegistrationModel extends BaseModel<PeppolRegistration> {
  protected readonly model = 'peppol.registration';
}
