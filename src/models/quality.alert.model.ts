import { BaseModel } from '../BaseModel';
import { QualityAlert } from '../types/quality.alert';

export class QualityAlertModel extends BaseModel<QualityAlert> {
  protected readonly model = 'quality.alert';
}
