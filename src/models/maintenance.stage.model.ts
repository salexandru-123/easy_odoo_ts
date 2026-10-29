import { BaseModel } from '../BaseModel';
import { MaintenanceStage } from '../types/maintenance.stage';

export class MaintenanceStageModel extends BaseModel<MaintenanceStage> {
  protected readonly model = 'maintenance.stage';
}
