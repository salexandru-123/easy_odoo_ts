import { BaseModel } from '../BaseModel';
import { MaintenanceEquipmentCategory } from '../types/maintenance.equipment.category';

export class MaintenanceEquipmentCategoryModel extends BaseModel<MaintenanceEquipmentCategory> {
  protected readonly model = 'maintenance.equipment.category';
}
