import { BaseModel } from '../BaseModel';
import { MaintenanceEquipment } from '../types/maintenance.equipment';

export class MaintenanceEquipmentModel extends BaseModel<MaintenanceEquipment> {
  protected readonly model = 'maintenance.equipment';
}
