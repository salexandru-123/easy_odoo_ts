import { BaseModel } from '../BaseModel';
import { MaintenanceTeam } from '../types/maintenance.team';

export class MaintenanceTeamModel extends BaseModel<MaintenanceTeam> {
  protected readonly model = 'maintenance.team';
}
