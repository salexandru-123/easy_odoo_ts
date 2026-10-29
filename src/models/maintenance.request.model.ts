import { BaseModel } from '../BaseModel';
import { MaintenanceRequest } from '../types/maintenance.request';

export class MaintenanceRequestModel extends BaseModel<MaintenanceRequest> {
  protected readonly model = 'maintenance.request';
}
