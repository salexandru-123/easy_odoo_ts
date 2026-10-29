import { BaseModel } from '../BaseModel';
import { QualityAlertTeam } from '../types/quality.alert.team';

export class QualityAlertTeamModel extends BaseModel<QualityAlertTeam> {
  protected readonly model = 'quality.alert.team';
}
