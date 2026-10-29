import { BaseModel } from '../BaseModel';
import { QualityCheck } from '../types/quality.check';

export class QualityCheckModel extends BaseModel<QualityCheck> {
  protected readonly model = 'quality.check';
}
