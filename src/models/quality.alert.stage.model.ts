import { BaseModel } from '../BaseModel';
import { QualityAlertStage } from '../types/quality.alert.stage';

export class QualityAlertStageModel extends BaseModel<QualityAlertStage> {
  protected readonly model = 'quality.alert.stage';
}
