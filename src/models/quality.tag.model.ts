import { BaseModel } from '../BaseModel';
import { QualityTag } from '../types/quality.tag';

export class QualityTagModel extends BaseModel<QualityTag> {
  protected readonly model = 'quality.tag';
}
