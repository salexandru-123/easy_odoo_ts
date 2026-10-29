import { BaseModel } from '../BaseModel';
import { QualityReason } from '../types/quality.reason';

export class QualityReasonModel extends BaseModel<QualityReason> {
  protected readonly model = 'quality.reason';
}
