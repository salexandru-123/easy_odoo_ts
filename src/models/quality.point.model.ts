import { BaseModel } from '../BaseModel';
import { QualityPoint } from '../types/quality.point';

export class QualityPointModel extends BaseModel<QualityPoint> {
  protected readonly model = 'quality.point';
}
