import { BaseModel } from '../BaseModel';
import { CertificateKey } from '../types/certificate.key';

export class CertificateKeyModel extends BaseModel<CertificateKey> {
  protected readonly model = 'certificate.key';
}
